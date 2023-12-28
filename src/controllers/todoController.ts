import todoService from '../services/todoService';

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
    res.json(await todoService.deleteData(req.params.id));
  } catch (err) {
    console.error('Error while getting programming languages', err);
    next(err);
  }
}
async function updateEntry(req: any, res: any, next: any) {
  try {
    res.json(await todoService.updateData(req.params.id, req.body));
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
