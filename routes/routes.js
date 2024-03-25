const express = require('express');
const { createTask } = require('../controllers/create');
const { fetchAll, fetchById } = require('../controllers/fetch');
const { deleteTask } = require('../controllers/delete');
const { updateTask } = require('../controllers/update');
const { isExists } = require('../controllers/exists');
const router = express.Router();

router.use('/create', createTask);
router.use('/fetchAll', fetchAll);
router.use('/fetch/:id', fetchById);
router.use('/delete/:id', deleteTask);
router.use('/update/:id', updateTask);
router.use('/exists', isExists);
module.exports = router; 