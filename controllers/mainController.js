const controller = {
    index: (req,res) => {
        res.render ('index')
    },
    who: (req,res) => {
        res.render ('who')
    },
    terminos: (req,res) => {
        res.render ('terminos')
    },


}

module.exports = controller;
