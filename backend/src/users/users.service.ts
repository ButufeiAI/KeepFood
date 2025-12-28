import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['restaurant'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email },
      relations: ['restaurant'],
    });
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  async update(id: string, updateData: Partial<User>): Promise<User> {
    try {
      console.log('UsersService.update - ID:', id);
      console.log('UsersService.update - Data:', updateData);
      
      // Si on met à jour le mot de passe, il faut le hasher
      const dataToUpdate = { ...updateData };
      if (updateData.password) {
        dataToUpdate.password = await bcrypt.hash(updateData.password, 10);
        console.log('Mot de passe hashé avant mise à jour');
      }
      
      // Mettre à jour directement
      await this.usersRepository.update(id, dataToUpdate);
      
      // Récupérer l'utilisateur mis à jour
      const updatedUser = await this.usersRepository.findOne({
        where: { id },
        relations: ['restaurant'],
      });
      
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found after update`);
      }
      
      console.log('UsersService.update - Utilisateur mis à jour:', updatedUser.id);
      return updatedUser;
    } catch (error: any) {
      console.error('Erreur dans UsersService.update:', error);
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
      throw error;
    }
  }

  async resetPassword(email: string, newPassword: string): Promise<User> {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.usersRepository.update(user.id, { password: hashedPassword });
    
    const updatedUser = await this.findOne(user.id);
    console.log(`Mot de passe réinitialisé pour: ${email}`);
    return updatedUser;
  }

  async createBatch(users: CreateUserDto[]): Promise<User[]> {
    const createdUsers: User[] = [];
    
    for (const userDto of users) {
      // Vérifier si l'email existe déjà
      const existingUser = await this.findByEmail(userDto.email);
      if (existingUser) {
        continue; // Skip si l'email existe déjà
      }

      const hashedPassword = await bcrypt.hash(userDto.password || 'temp123', 10);
      const user = this.usersRepository.create({
        ...userDto,
        password: hashedPassword,
      });
      const savedUser = await this.usersRepository.save(user);
      createdUsers.push(savedUser);
    }

    return createdUsers;
  }

  async findAllOrphans(): Promise<User[]> {
    return this.usersRepository.find({
      where: { restaurantId: null },
    });
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
  }
}

