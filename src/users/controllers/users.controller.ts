import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // ====================================================================== \\
  // @desc  Get All Users
  // @Route Get /users
  // @access  Private [Admin, Manger]
  @Get()
  gatAllUsers() {
    return this.usersService.getAllUsers();
  }
  // ====================================================================== \\
}
