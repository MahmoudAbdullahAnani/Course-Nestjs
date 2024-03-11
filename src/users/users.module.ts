import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { catsProviders } from './providers/users.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...catsProviders, UsersService],
})
export class UsersModule {}
