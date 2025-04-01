import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../database/database";
import { User } from "../models/user";

class UserService {
  async getAllUser(): Promise<User[]> {
    const users = await db.query<RowDataPacket[]>("SELECT * FROM users");
    return users as User[];
  }

  async getUserById(id: number): Promise<User | null> {
    const users = await db.query("SELECT * FROM users WHERE id = ?", id);
    if (Array.isArray(users) && users.length > 0) {
      return users[0] as User;
    }
    return null;
  }

  async insertUser(data: User): Promise<User | null> {
    const result = await db.query<ResultSetHeader>(
      "INSERT INTO users (NAME) VALUES (?)",
      [data.name],
    );
    if (result.insertId) {
      return await this.getUserById(result.insertId);
    }
    return null;
  }
}

export default new UserService();
