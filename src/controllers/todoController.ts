import todoService from '../services/todoService';

async function getEntry(req, res, next) {
  try {
    res.json(await todoService.getData(req.query.page));
  } catch (err) {
    console.error('Error while getting programming languages', err.message);
    next(err);
  }
}
async function deleteEntry(req, res, next) {
  try {
    res.json(await todoService.deleteData(req.params.id));
  } catch (err) {
    console.error('Error while getting programming languages', err.message);
    next(err);
  }
}
async function updateEntry(req, res, next) {
  try {
    res.json(await todoService.updateData(req.params.id, req.body));
  } catch (err) {
    console.error('Error while getting programming languages', err.message);
    next(err);
  }
}
async function createEntry(req, res, next) {
  try {
    res.json(await todoService.createData(req.body));
  } catch (err) {
    console.error('Error while getting programming languages', err.message);
    next(err);
  }
}

module.exports = {
  getEntry,
  deleteEntry,
  updateEntry,
  createEntry,
};
