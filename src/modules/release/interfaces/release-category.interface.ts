import { ReleaseInterface } from './release.interface';

export interface ReleaseCategoryInterface {
  id: number;
  name: string;
  releases?: ReleaseInterface[];
}
