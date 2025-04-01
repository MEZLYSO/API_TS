import mysql2, {
  ConnectionOptions,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

//Configuration database
const config: ConnectionOptions = {
  host: "localhost",
  user: "root",
  password: "",
  database: "application",
  connectionLimit: 10,
  //Espera en la conexion
  waitForConnections: true,
  // Tiempo de espera
  queueLimit: 0,
};

const pool = mysql2.createPool(config);

class Database {
  async query<T extends RowDataPacket[] | ResultSetHeader>(
    sql: string,
    values: any = null,
  ) {
    const cn = await pool.getConnection();
    try {
      const [results] = await cn.query(sql, values);
      return results as T;
    } finally {
      cn.release();
    }
  }
}

export default new Database();
