import { ReleaseOriginInterface } from '../interfaces/release-origin.interface';
import { ReleaseInterface } from '../interfaces/release.interface';

export class ReleaseOriginCreateDto implements ReleaseOriginInterface {
  id: number;
  name: string;
  releases: ReleaseInterface[];
}
