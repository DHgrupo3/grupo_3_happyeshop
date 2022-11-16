const controller = {
    index: (req,res) => {
        res.render ('productList')
    },
    cart: (req,res) => {
        res.render ('productCart')
    },
    register: (req,res) => {
        res.render ('register')
    },

}

module.exports = controller;
