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

  async editUser(data: User, id: number): Promise<User | null> {
    const user = await db.query<ResultSetHeader>(
      "UPDATE users SET NAME = ? WHERE ID = ?",
      [data.name, id],
    );
    if (user.affectedRows) {
      return await this.getUserById(id);
    }
    return null;
  }

  async deleteUser(id: number): Promise<Boolean> {
    const user = await db.query<ResultSetHeader>(
      "DELETE FROM users WHERE ID = ?",
      id,
    );
    return user.affectedRows > 0;
  }
}

export default new UserService();
