import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class createUserDto {
  @IsString({ message: 'firstName must be a string' })
  @MinLength(2, { message: 'firstName must be at least 2 characters' })
  firstName: string;
  @IsString({ message: 'lastName must be a string' })
  @MaxLength(20, { message: 'lastName value is too big' })
  lastName: string;
  @IsString({ message: 'email must be a string' })
  @IsEmail({}, { message: 'email is not valid' })
  email: string;
}
