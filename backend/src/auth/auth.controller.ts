import {
  Controller,
  Post,
  Body,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Req,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const tokens = await this.authService.register(registerDto);
    this.authService.setTokenCookies(response, tokens);
    return tokens;
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('=== LOGIN CONTROLLER APPELÉ ===');
    console.log('Email reçu:', loginDto.email);
    console.log('Password reçu:', loginDto.password ? '***' : 'VIDE');
    try {
      const tokens = await this.authService.login(loginDto);
      this.authService.setTokenCookies(response, tokens);
      console.log('✅ Login réussi pour:', loginDto.email);
      return tokens;
    } catch (error: any) {
      console.error('❌ Erreur login controller:', error.message);
      throw error;
    }
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refreshToken = request.cookies?.refreshToken || request.body?.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not provided');
    }
    const tokens = await this.authService.refreshToken(refreshToken);
    this.authService.setTokenCookies(response, tokens);
    return tokens;
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('accessToken');
    response.clearCookie('refreshToken');
    return { message: 'Logged out successfully' };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser() user: User) {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      restaurantId: user.restaurantId,
    };
  }

  @Post('reset-password')
  async resetPassword(@Body() body: { email: string; newPassword: string }) {
    // Endpoint simple pour réinitialiser le mot de passe (sans authentification pour le debug)
    // En production, il faudrait ajouter une vérification de sécurité
    const user = await this.authService.resetPassword(body.email, body.newPassword);
    return { message: 'Mot de passe réinitialisé avec succès', email: user.email };
  }

  @Post('users/batch')
  @UseGuards(JwtAuthGuard)
  async createUsersBatch(
    @Body() body: { users: Array<{ email: string; firstName: string; lastName: string; role: string; phone?: string; restaurantId: string }> },
    @CurrentUser() currentUser: User,
  ) {
    // Seul ADMIN_RESTAURANT ou SUPER_ADMIN peut créer des utilisateurs
    if (currentUser.role !== 'SUPER_ADMIN' && currentUser.role !== 'ADMIN_RESTAURANT') {
      throw new ForbiddenException('Vous n\'avez pas les permissions pour créer des utilisateurs');
    }

    const createdUsers = [];
    for (const userData of body.users) {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await this.usersService.findByEmail(userData.email);
      if (existingUser) {
        continue;
      }

      // Générer un mot de passe temporaire
      const tempPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8).toUpperCase() + '123';
      
      try {
        const user = await this.usersService.create({
          email: userData.email,
          password: tempPassword,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: userData.role as any,
          phone: userData.phone,
          restaurantId: userData.restaurantId,
        });
        createdUsers.push({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, tempPassword });
      } catch (error) {
        console.error(`Erreur création utilisateur ${userData.email}:`, error);
      }
    }

    return { created: createdUsers.length, users: createdUsers };
  }
}

