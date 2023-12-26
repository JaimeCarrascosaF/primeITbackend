async function getData(page = 1) {
  return {
    test: page,
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
async function createData(data) {
  return {
    data,
    val: 'test',
  };
}

export default {
  getData,
  deleteData,
  updateData,
  createData,
};
