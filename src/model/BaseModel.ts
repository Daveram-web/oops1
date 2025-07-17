import db from "../database/db";

export abstract class BaseModel<T> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  abstract MaptoRow(row: any): T;

  async getAll(): Promise<T[]> {
    let [row]: any = await db.query(
      `SELECT * FROM ${this.tableName} WHERE s_delete = 0`
    );
    return row.map(this.MaptoRow);
  }

  async getById(id: number): Promise<T | null> {
    let [row]: any = await db.query(
      `SELCT * FROM ${this.tableName} WHERE s_delete = 0`
    );
    return row.map(this.MaptoRow);
  }

  async deletes(id: number): Promise<T | boolean> {
    let [del]: any = await db.query(
      `UPDATE ${this.tableName} SET s_delete = 1 `,
      [id]
    );

    return del.affectedRows > 0;
  }
}
