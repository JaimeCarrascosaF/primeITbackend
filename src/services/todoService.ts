import {
  createItem,
  deleteItem,
  getItems,
  updateItem,
} from '../bbddhelpers/queries';
import { Item } from '../types/Item';

async function getData() {
  const items = await getItems();
  return {
    items,
  };
}
async function deleteData(id: number = -1) {
  if (id) await deleteItem({ id });
  return {
    deleted: id,
  };
}
async function updateData(item: Item) {
  if (item.id) await updateItem(item);
  return {
    updated: item.id,
  };
}

async function createData({ title, details }: Item) {
  await createItem({ title, details });
  return {
    created: true,
  };
}

export default {
  getData,
  deleteData,
  updateData,
  createData,
};
