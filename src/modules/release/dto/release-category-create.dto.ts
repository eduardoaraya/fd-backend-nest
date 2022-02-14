import { ReleaseCategoryInterface } from '../interfaces/release-category.interface';
import { ReleaseInterface } from '../interfaces/release.interface';

export class ReleaseCategoryCreateDto implements ReleaseCategoryInterface {
  id: number;
  name: string;
  releases?: ReleaseInterface[];
}
