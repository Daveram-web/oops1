export abstract class BaseService<T> {
  abstract getAll(): Promise<T[]>;
  abstract getById(id: number): Promise<T | null>;
  abstract deletes(id: number): Promise<T | boolean>;
}
