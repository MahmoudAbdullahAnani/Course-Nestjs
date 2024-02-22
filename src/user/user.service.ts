import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.user.create(createUserDto);
    return this.user.save(user);
  }

  async findAll() {
    const users = await this.user.find();
    return {
      data: users,
      count: users.length,
    };
  }

  async findOne(id) {
    const user = await this.user.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async update(id, updateUserDto) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException();
    }

    return this.user.save({ ...user, ...updateUserDto });
  }

  async delete(id) {
    const user = await this.user.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException();
    }
    await this.user.delete(id);
    return { res: 'Deleted user on ' + id };
  }
}
