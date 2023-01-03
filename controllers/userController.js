const controller = {
    
    register: (req,res) => {
        res.render ('./users/register')
    },

    login: (req,res) => {
        res.render ('./users/login')
    },

    contact: (req,res) => {
        res.render ('./users/contactanos')
    },
    terminos: (req,res) => {
        res.render ('./terminos')
    },

}

module.exports = controller;
