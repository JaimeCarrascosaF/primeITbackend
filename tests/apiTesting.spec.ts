import { describe, expect } from '@jest/globals';
import { Item } from '../src/types/Item';

const request = require('supertest');

const baseURL = 'http://localhost:5000/api';
describe('GET testing', () => {
  it('should return 200', async () => {
    const response = await request(baseURL).get('/list');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
  it('should return 404', async () => {
    const response = await request(baseURL).get('/undefinedRoute');
    expect(response.statusCode).toBe(404);
    expect(response.body.error).not.toBe(undefined);
  });
  it('should return list of todos', async () => {
    const response = await request(baseURL).get('/list');
    expect(response.body.items.length >= 1).toBe(true);
  });
});
describe('POST and DELETE testing', () => {
  const newTodo: Item = {
    title: 'jest test example',
    details: 'jest test example details',
  };
  const responseCreated = {
    created: true,
  };
  it('should add an item and then remove it', async () => {
    const response = await request(baseURL).post('/create').send(newTodo);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(responseCreated);
    const getItems = await request(baseURL).get('/list');
    const { items } = getItems.body;
    const newItem = items.find((el: Item) => el.title === 'jest test example');
    const responseDeletedQuery = await request(baseURL).delete(
      `/delete/?id=${newItem.id}`,
    );
    const responseDeleted = { deleted: `${newItem.id}` };
    expect(responseDeletedQuery.body).toEqual(responseDeleted);
  });
});

describe('PUT testing', () => {
  const newTodo: Item = {
    title: 'jest test example',
    details: 'jest test example details',
  };
  const modifiedTodo: Item = {
    title: 'jest test modified',
    details: 'jest test example details modified',
  };
  const responseCreated = {
    created: true,
  };
  it('should add an item and then remove it', async () => {
    const response = await request(baseURL).post('/create').send(newTodo);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(responseCreated);

    let getItems = await request(baseURL).get('/list');
    let { items } = getItems.body;
    let newItem = items.find((el: Item) => el.title === 'jest test example');
    modifiedTodo.id = newItem.id;
    await request(baseURL).put('/update/').send(modifiedTodo);

    getItems = await request(baseURL).get('/list');
    items = getItems.body.items;
    newItem = items.find(
      (el: Item) => el.title === 'jest test modified'
        && el.details === 'jest test example details modified',
    );

    delete modifiedTodo.id;
    expect(newItem).toMatchObject(modifiedTodo);

    const responseDeletedQuery = await request(baseURL).delete(
      `/delete/?id=${newItem.id}`,
    );
    const responseDeleted = { deleted: `${newItem.id}` };
    expect(responseDeletedQuery.body).toEqual(responseDeleted);
  });
});
