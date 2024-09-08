// db.ts
import type { Table } from "dexie";
import Dexie from "dexie";
import type { Like } from "./db.types";
import { CartItem } from "~/hooks/db/useCart";

export type Cart = {
  items: CartItem[];
  consent: boolean;
}

export class Db extends Dexie {
  likes!: Table<Like>;
  cart!: Table<Cart>;

  constructor() {
    super("cyberlife");
    this.version(1).stores({
      likes: "id, value", // Primary key and indexed props,
      cart: ""
    });
  }
}

export const db = new Db();
