export interface IStorage<T> {
  load(id: number): Promise<T>;
  loadAll(): Promise<T[]>;
  create(value: T): Promise<T>;
}