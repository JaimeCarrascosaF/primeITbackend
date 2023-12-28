import { Pool } from 'pg';
import { Item } from '../interfaces/IfItem';

const pool = new Pool({
  user: 'appUser',
  host: 'localhost',
  database: 'todo',
  password: 'primeIT',
  port: 5432,
});

async function getItems() {
  try {
    const results = await pool.query('SELECT * FROM items ORDER BY id ASC');
    return results.rows;
  } catch (error) {
    console.error('Error while getting data', error);
    throw error;
  }
}
async function createItem({ title, details } : Item) {
  try {
    await pool.query('INSERT INTO items (title, details) VALUES ($1, $2) RETURNING *', [title, details]);
  } catch (error) {
    console.error('Error while creating data', error);

    throw error;
  }
}

export { getItems, createItem };
