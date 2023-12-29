import { Pool } from 'pg';
import { Item } from '../types/Item';

const pool = new Pool({
  user: 'appUser',
  host: 'localhost',
  database: 'todo',
  password: 'primeIT',
  port: 5432,
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
