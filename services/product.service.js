import { pool } from '../database/pgConnection.js'

export async function selectAllProduct() {
  const result = await pool.query(`SELECT * FROM producto ORDER BY id_producto`)

  return result.rows
}

export async function insertProduct(data) {
  const { nombre_producto, precio_producto, stock_producto, id_comerciante } = data

  const query = `INSERT INTO producto(nombre_producto, precio_producto, stock_producto, id_comerciante)
     VALUES ($1, $2, $3, $4) RETURNING *`

  const result = await pool.query(query, [nombre_producto, precio_producto, stock_producto, id_comerciante])

  return result.rows[0]
}
