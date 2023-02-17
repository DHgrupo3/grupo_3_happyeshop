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
    contacto: (req,res) => {
        res.render ('contacto')
    },
    cart: (req,res) => {
        res.render ('productCart')
    },


}

module.exports = controller;
