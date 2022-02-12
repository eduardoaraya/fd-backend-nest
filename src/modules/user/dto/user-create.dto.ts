import { UserInterface } from '../interfaces/user.interface';

export default class UserCreateDto implements UserInterface {
  name: string;
  password: string;
  email: string;
}
