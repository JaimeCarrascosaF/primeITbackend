import todoService from '../services/todoService';
import { Item } from '../interfaces/IfItem';

async function getEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.getData(req.query.page));
  } catch (err) {
    console.error('Error while getting programming languages', err);
    next(err);
  }
}
async function deleteEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.deleteData(req.query.id));
  } catch (err) {
    console.error('Error while getting programming languages', err);
    next(err);
  }
}
async function updateEntry(req: any, res: any, next: any) {
  try {
    const newItem: Item = req.body;
    res.json(await todoService.updateData(newItem));
  } catch (err) {
    console.error('Error while getting programming languages', err);
    next(err);
  }
}
async function createEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.createData(req.body));
  } catch (err) {
    console.error('Error while getting programming languages', err);
    next(err);
  }
}

export default {
  getEntry,
  deleteEntry,
  updateEntry,
  createEntry,
};
