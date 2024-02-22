import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'firs tName Must be String' })
  firstName: string;
  @IsString({ message: 'last NameMust be String' })
  lastName: string;
  @IsNumber({}, { message: 'age Must be Number' })
  age: number;
}
