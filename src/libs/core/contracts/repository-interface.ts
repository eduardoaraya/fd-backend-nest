export interface RepositoryInterface<T> {
  create(data: unknown): Promise<unknown>;
  list(): Promise<unknown>;
}
