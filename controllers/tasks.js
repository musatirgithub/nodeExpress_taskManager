const Task = require('../models/Task');

const getAllTasks = (req,res)=>{
    res.status(200).send('All Items')
}

const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.json({task})
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.status(200).send('Task updated')
}

const deleteTask = (req,res)=>{
    res.status(200).send('Task deleted')
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}