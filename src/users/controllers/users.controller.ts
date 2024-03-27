import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { createUserDto } from '../dto/createUserDto.dto';
import { updateUserDto } from '../dto/updateUserDto.dto';
import { Roles } from '../guards/Roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // ====================================================================== \\
  // @desc  Get All Users
  // @Route Get /users
  // @access  Private [Admin, Manger]
  @Roles(['admin', 'Manger'])
  @Get()
  gatAllUsers() {
    return this.usersService.getAllUsers();
  }
  // ====================================================================== \\
  // ====================================================================== \\
  // @desc  Get User By Id
  // @Route Get /users/:userId
  // @access  Private [Admin, Manger]
  @Roles(['admin', 'Manger'])
  @Get(':userId')
  gatUsersById(@Param('userId') userId: string) {
    return this.usersService.gatUsersById(userId);
  }
  // ====================================================================== \\
  // @desc  Create User
  // @Route Post /users
  // @access  Private [Admin]
  @Roles(['admin'])
  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: createUserDto,
  ) {
    return this.usersService.createUser(body);
  }
  // ====================================================================== \\
  // @desc  Update User By Id
  // @Route Patch /users/:userId
  // @access  Private [Admin, Manger]
  @Roles(['admin', 'Manger'])
  @Patch(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: updateUserDto,
  ) {
    return this.usersService.updateUser(userId, body);
  }
  // ====================================================================== \\
  // @desc  Delete User By Id
  // @Route Delete /users/:userId
  // @access  Private [Admin]
  @Roles(['admin'])
  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.usersService.deleteUser(userId);
  }
  // ====================================================================== \\
}
