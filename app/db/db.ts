// db.ts
import type { Table } from 'dexie';
import Dexie from 'dexie';
import type { Cart, Like } from './db.types';

export class Db extends Dexie {
  likes!: Table<Like>;
  cart!: Table<Cart>;

  constructor() {
    super('cyberlife');
    this.version(1).stores({
      likes: 'id, value', // Primary key and indexed props,
      cart: '',
    });
  }
}

export const db = new Db();
