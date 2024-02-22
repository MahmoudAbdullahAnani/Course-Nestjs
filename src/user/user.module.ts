import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const schema = [User];

@Module({
  imports: [TypeOrmModule.forFeature(schema)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
