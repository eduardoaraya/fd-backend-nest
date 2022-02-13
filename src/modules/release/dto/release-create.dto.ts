import { IsDateString, IsString, MaxLength } from 'class-validator';
import { WalletInterface } from '../../wallet/interfaces/wallet.interface';
import { ReleaseInterface } from '../interfaces/release.interface';
import { ReleaseCategoryInterface } from '../interfaces/release-category.interface';
import { ReleaseOriginInterface } from '../interfaces/release-origin.interface';

export class ReleaseCreateDto implements ReleaseInterface {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(244)
  description: string;

  @IsDateString()
  release_date: string;

  @IsString()
  type: string;

  origin?: ReleaseOriginInterface;
  category?: ReleaseCategoryInterface;
  wallet?: WalletInterface;
}
