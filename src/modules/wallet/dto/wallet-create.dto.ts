import { IsString, MaxLength } from 'class-validator';
import { UserInterface } from '../../user/interfaces/user.interface';
import { WalletInterface } from '../interfaces/wallet.interface';

export class WalletCreateDto implements WalletInterface {
  @IsString()
  @MaxLength(100)
  name: string;

  user?: UserInterface;
}
