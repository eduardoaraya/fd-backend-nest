import { WalletInterface } from '../../wallet/interfaces/wallet.interface';
import { ReleaseCategoryInterface } from './releaseCategory.interface';
import { ReleaseOriginInterface } from './releaseOrigin.interface';

export interface ReleaseInterface {
  id: number;
  name: string;
  wallet: WalletInterface;
  origin: ReleaseOriginInterface;
  category: ReleaseCategoryInterface;
}
