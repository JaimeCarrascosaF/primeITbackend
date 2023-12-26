import express from 'express';

const router = express.Router();
const todoController = require('../controllers/todoController');

/* GET programming languages. */
router.get('/list', todoController.getEntry);
router.delete('/delete/:id', todoController.deleteEntry);
router.put('/update/:id', todoController.updateEntry);
router.post('/create', todoController.createEntry);

module.exports = router;
