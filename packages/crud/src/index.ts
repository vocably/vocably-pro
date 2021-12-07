import { nanoid } from 'nanoid';

export type Timestamp = number;

export type Item<T> = {
  id: string;
  data: T;
  created: Timestamp;
  updated?: Timestamp;
};

export type Collection<T> = Item<T>[];

export const byId =
  <T>(id: string) =>
  (item: Item<T>): boolean => {
    return item.id === id;
  };

export const makeCreate =
  <T>(collection: Collection<T>) =>
  (data: T): Item<T> => {
    const now = +new Date();
    const item: Item<T> = {
      id: nanoid(5),
      created: now,
      data,
    };
    collection.push(item);
    return item;
  };

export const makeUpdate =
  <T>(collection: Collection<T>) =>
  (id: string, data: Partial<T>): Item<T> | false => {
    const itemToUpdate = collection.find(byId(id));

    if (itemToUpdate === undefined) {
      return false;
    }

    itemToUpdate.updated = +new Date();
    itemToUpdate.data = {
      ...itemToUpdate.data,
      ...data,
    };

    return itemToUpdate;
  };

export const makeDelete =
  <T>(collection: Collection<T>) =>
  (id: string): boolean => {
    const index = collection.findIndex(byId(id));
    if (index === -1) {
      return false;
    }

    collection.splice(index, 1);
    return true;
  };
