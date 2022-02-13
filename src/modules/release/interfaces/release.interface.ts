import { WalletInterface } from '../../wallet/interfaces/wallet.interface';
import { ReleaseCategoryInterface } from './release-category.interface';
import { ReleaseOriginInterface } from './release-origin.interface';

export interface ReleaseInterface {
  id?: number;
  name: string;
  description: string;
  release_date: string;
  type: string;

  wallet?: WalletInterface;
  origin?: ReleaseOriginInterface;
  category?: ReleaseCategoryInterface;
}
