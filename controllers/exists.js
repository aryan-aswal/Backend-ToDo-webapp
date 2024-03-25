const todo = require('../models/model');

const isExists = async(req, res) => {
    const { filterData } = req.body;
    try {
        const filteredData = await todo.exists({title: filterData});
        if(!filteredData) {
            return res.status(404).json({
                success: false,
                message: "No data found"
            })
        }
        res.status(200).json({
            success: true,
            data: filteredData,
            message: "data fetched"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
module.exports = { isExists }