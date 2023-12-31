import todoService from '../services/todoService';
import { Item } from '../types/Item';

async function getEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.getData());
  } catch (err) {
    next(err);
  }
}
async function deleteEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.deleteData(req.query.id));
  } catch (err) {
    next(err);
  }
}
async function updateEntry(req: any, res: any, next: any) {
  try {
    const newItem: Item = req.body;
    res.json(await todoService.updateData(newItem));
  } catch (err) {
    next(err);
  }
}
async function createEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.createData(req.body));
  } catch (err) {
    next(err);
  }
}

export default {
  getEntry,
  deleteEntry,
  updateEntry,
  createEntry,
};
