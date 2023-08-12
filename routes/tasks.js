const express = require('express');
const router = express.Router();
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/api/v1/tasks').get(getAllTasks).post(createTask)
router.route('/api/v1/tasks/:id').get(getTask).put(updateTask).delete(deleteTask)

module.exports = router;