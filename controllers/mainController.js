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
    cart: (req,res) => {
        res.render ('productCart')
    },


}

module.exports = controller;
