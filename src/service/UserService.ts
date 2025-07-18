import db from "../database/db";
import { User, UserModel } from "../model/UserModel";
import { BaseService } from "./BaseService";

const userModel = new UserModel();
export class UserService extends BaseService<User> {
  getAll(): Promise<User[]> {
    return userModel.getAll();
  }
  getById(id: number): Promise<User | null> {
    return userModel.getById(id);
  }
  deletes(id: number): Promise<boolean | User> {
    return userModel.deletes(id);
  }

  async createUser(data: any): Promise<User> {
    try {
      const {
        name,
        email,
        password,
        language_id,
        date_of_birth,
        gener_id,
      } = data;

      console.log('data', data)
      let [create]: any = await db.query(
        `INSERT INTO user (name,email,password,language_id,date_of_birth,gener_id) VALUES (?,?,?,?,?,?)`,
        [ name, email, password, language_id, date_of_birth, gener_id]
      );
      let result = create.affectedRows > 0;
      return create;
    } catch (error) {
      throw error;
    }
  }

  
}
