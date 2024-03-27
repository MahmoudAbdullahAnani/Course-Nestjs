import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
// Self Classes
import { Roles } from './roles.decorator';
@Injectable()
export class UsersGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get(Roles, context.getHandler());
    // console.log('roles', roles);

    // API Public
    if (!roles) {
      return true;
    }
    // Get Token
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ', 2)[1];
    // Verify Token
    // const token = this.extractTokenFromHeader(request);
    // console.log(token);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      if (roles.includes(payload.role.toLowerCase())) {
        return true;
      } else {
        throw new UnauthorizedException();
      }
    } catch {
      throw new UnauthorizedException();
    }
  }
}
