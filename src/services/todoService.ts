import { createItem, deleteItem, getItems, updateItem } from '../bbddhelpers/queries';
import { Item } from '../interfaces/IfItem';

async function getData(page = 1) {
  const items = await getItems();
  return {
    test: items,
    page,
  };
}
async function deleteData(id: number = -1) {
  if (id)
    await deleteItem({id})
  return {
    test: id,
  };
}
async function updateData(item: Item) {
  if (item.id)
    await updateItem(item);
  return {
    test: item.id,
    item,
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
