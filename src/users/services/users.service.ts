import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from '../interfaces/users.interface';
import { createUserDto } from '../dto/createUserDto.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private usersModel: Model<Users>,
  ) {}
  async getAllUsers(): Promise<{
    data: Users[];
    count: number;
    status: number;
  }> {
    const users = await this.usersModel
      .find()
      .select('-_id firstName lastName email');
    return { data: users, count: users.length, status: 200 };
  }
  async gatUsersById(userId: string): Promise<Users> {
    const user = await this.usersModel
      .findById(userId)
      .select('-_id firstName lastName email');
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  async createUser(body: createUserDto): Promise<Users> {
    const user = await this.usersModel.create(body);
    return user;
  }
}
