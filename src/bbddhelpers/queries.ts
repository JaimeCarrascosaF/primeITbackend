import { Pool } from 'pg';
import { Item } from '../types/Item';

require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});

async function getItems() {
  const results = await pool.query('SELECT * FROM items ORDER BY id ASC');
  return results.rows;
}
async function createItem({ title, details } : Item) {
  await pool.query('INSERT INTO items (title, details) VALUES ($1, $2) RETURNING *', [title, details]);
}
async function updateItem({ title, details, id } : Item) {
  await pool.query('UPDATE items SET title = $1, details = $2 WHERE id = $3', [title, details, id]);
}
async function deleteItem({ id } : Item) {
  await pool.query('DELETE FROM items WHERE id = $1', [id]);
}

export {
  getItems, createItem, updateItem, deleteItem,
};
