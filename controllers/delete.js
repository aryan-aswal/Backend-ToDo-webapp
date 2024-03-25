const todo = require('../models/model');

const deleteTask = async(req, res) => {
    const { id } = req.body;
    try {
        const deletedTask = await todo.findByIdAndDelete(id);
        if(!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "No comment found"
            })
        }
        res.status(200).json({
            success: true,
            data: deletedTask,
            message: "comment deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
module.exports = { deleteTask }; 