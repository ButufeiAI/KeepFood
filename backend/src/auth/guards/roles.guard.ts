import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../../common/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      'roles',
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    
    // Vérifier que l'utilisateur existe (doit être défini par JwtAuthGuard)
    if (!user) {
      console.error('RolesGuard: user is undefined. JwtAuthGuard must be executed first.');
      return false;
    }
    
    return requiredRoles.some((role) => user.role === role);
  }
}



