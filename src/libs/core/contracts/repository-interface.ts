export interface RepositoryInterface<T> {
  create(data: unknown): Promise<T>;
  list(): Promise<T[]>;
}
