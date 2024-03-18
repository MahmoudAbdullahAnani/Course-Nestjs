import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from '../interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private usersModel: Model<Users>,
  ) {}
  getAllUsers(): Promise<Users[]> {
    return this.usersModel.find();
  }
  async gatUsersById(userId: string): Promise<Users> {
    const user = await this.usersModel.findById(userId);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
