import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from './createUserDto.dto';
export class updateUserDto extends PartialType(createUserDto) {}
