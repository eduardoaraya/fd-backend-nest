import { WalletInterface } from '../../wallet/interfaces/wallet.interface';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  wallets: WalletInterface[];
}
