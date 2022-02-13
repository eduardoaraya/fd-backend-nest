import { IsEmail, IsString } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export default class UserCreateDto implements UserInterface {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
