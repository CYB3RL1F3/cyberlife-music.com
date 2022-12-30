// db.ts
import type { Table } from "dexie";
import Dexie from "dexie";
import type { Like } from "./db.types";

export class Db extends Dexie {
  likes!: Table<Like>;

  constructor() {
    super("cyberlife");
    this.version(1).stores({
      likes: "id, value" // Primary key and indexed props
    });
  }
}

export const db = new Db();
