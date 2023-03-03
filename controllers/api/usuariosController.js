const db = require("../../database/models");

const usuariosAPIController = {
    'list':(req,res)=> {
        db.Usuario.findAll().then((usuario) => {
            let response = {
        meta: {
            status: 200,
            total: usuario.length,
            url: "api/usuario",
        },
        data: usuario,
    };

    res.json (response);
});
},

'detail': (req, res) => {
    db.Usuario.findByPk(req.params.id)
    .then(usuario => {
        let response = {
            
                meta:{
                    status: 200,
                    url: "api/detail/" + usuario.id
                },
                data:usuario,
        };
       
        console.log(".-........");
        console.log(response);
        res.json (response);

});
}
};


module.exports = usuariosAPIController;