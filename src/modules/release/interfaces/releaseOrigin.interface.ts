import { ReleaseInterface } from './release.interface';

export interface ReleaseOriginInterface {
  id: number;
  name: string;
  releases: ReleaseInterface[];
}
