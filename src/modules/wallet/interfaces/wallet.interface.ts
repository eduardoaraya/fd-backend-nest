import { UserInterface } from '../../user/interfaces/user.interface';

export interface WalletInterface {
  id?: number;
  name: string;
  user?: UserInterface;
}
