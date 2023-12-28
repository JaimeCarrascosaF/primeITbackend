import { createItem, getItems } from '../bbddhelpers/queries';
import { Item } from '../interfaces/IfItem';

async function getData(page = 1) {
  const items = await getItems();
  return {
    test: items,
    page,
  };
}
async function deleteData(id = null) {
  return {
    test: id,
  };
}
async function updateData(id = null, data = {}) {
  return {
    test: id,
    data,
  };
}

async function createData({ title, details }: Item) {
  await createItem({ title, details });
  return {

    val: 'test',
  };
}

export default {
  getData,
  deleteData,
  updateData,
  createData,
};
