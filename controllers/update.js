const todo = require('../models/model');

const updateTask = async(req, res) => {
    const { id, title, description } = req.body;
    try {
        const updatedTask = await todo.findByIdAndUpdate(id, {title, description}, {new: true});
        res.status(200).json({
            success: true,
            data: updatedTask,
            message: "Task Updated"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports = { updateTask }; 