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

}

module.exports = controller;
