import express from 'express';
import todoController from '../controllers/todoController';

const router = express.Router();

/* GET programming languages. */
router.get('/list', todoController.getEntry);
router.delete('/delete/', todoController.deleteEntry);
router.put('/update/', todoController.updateEntry);
router.post('/create', todoController.createEntry);

export default router;
