const state = require('../models/State')

module.exports = {
    
    getStates: async(req, res) =>{
        let states = await state.find();
        res.json({
            states
        })
    },
    info: async(req, res) => {
        
    },
    editAction: async(req, res) => {

    }
}