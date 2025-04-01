import db from "../database/database";
import { User } from "../models/user";

class UserService {
  async getAllUser(): Promise<User[]> {
    const users = await db.query("SELECT * FROM users");
    return users as User[];
  }

  async getUserById(id: number): Promise<User | null> {
    const users = await db.query("SELECT * FROM users WHERE id = ?", id);
    if (Array.isArray(users) && users.length > 0) {
      return users[0] as User;
    }
    return null;
  }
}

export default new UserService();
