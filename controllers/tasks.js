const Task = require('../models/Task');

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res)=>{
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = (req,res)=>{
    res.status(200).send('Task updated')
}

const deleteTask = (req,res)=>{
    res.status(200).send('Task deleted')
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}