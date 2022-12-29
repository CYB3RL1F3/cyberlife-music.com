// db.ts
import type { Table } from "dexie";
import Dexie from "dexie";
import type { Like } from "./db.types";

export class Db extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  likes!: Table<Like>;

  constructor() {
    super("cyberlife");
    this.version(1).stores({
      likes: "id, value" // Primary key and indexed props
    });
  }
}

export const db = new Db();
