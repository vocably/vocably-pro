import { Result } from '@vocably/model';
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
  (id: string, data: Partial<T>): Result<Item<T>> => {
    const itemToUpdate = collection.find(byId(id));

    if (itemToUpdate === undefined) {
      return {
        success: false,
        errorCode: 'CRUD_UNABLE_TO_FIND_ITEM',
        reason: `Unable to find item with ID ${id}`,
      };
    }

    itemToUpdate.updated = +new Date();
    itemToUpdate.data = {
      ...itemToUpdate.data,
      ...data,
    };

    return {
      success: true,
      value: itemToUpdate,
    };
  };

export const makeDelete =
  <T>(collection: Collection<T>) =>
  (id: string): Result<true> => {
    const index = collection.findIndex(byId(id));
    if (index === -1) {
      return {
        success: false,
        errorCode: 'CRUD_UNABLE_TO_FIND_ITEM',
        reason: `Unable to find item with ID ${id}`,
      };
    }

    collection.splice(index, 1);
    return {
      success: true,
      value: true,
    };
  };

export const makeRestore =
  <T>(collection: Collection<T>) =>
  (item: Item<T>): Result<true> => {
    const index = collection.findIndex(byId(item.id));
    if (index !== -1) {
      return {
        success: false,
        errorCode: 'CRUD_ITEM_EXISTS',
        reason: `Item with ID ${item.id} already exists`,
      };
    }

    collection.push(item);
    return {
      success: true,
      value: true,
    };
  };
