const todo = require('../models/model');

const fetchAll = async(req, res) => {
    try {
        const allTasks = await todo.find({});
        if(!allTasks) {
            res.status(404).json({
                success: false,
                message: "No Task Found"
            })
        }
        res.status(200).json({
            success: true,
            data: allTasks,
            message: "All tasks found successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const fetchById = async(req, res) => {
    const { id } = req.body;
    try {
        const task = await todo.findById(id);
        if(!task) {
            res.status(404).json({
                success: false,
                message: "No Task found"
            })
        }
        res.status(200).json({
            success: true,
            data: task,
            message: "Task found"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { fetchAll, fetchById }; 