const todo = require('../models/model');

const createTask = async(req, res) => {
    const { title, description } = req.body;
    try {
        const task = await todo.create({title, description});
        res.status(200).json({
            success: true,
            message: "Entry created successfully"
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports = { createTask }; 
