const db = require("../../database/models");

const productosAPIController = {
    'list':(req,res)=> {
        db.Producto.findAll().then((producto) => {
            let response = {
        meta: {
            status: 200,
            total: producto.length,
            url: "api/producto",
        },
        data: producto,
    };

    res.json (response);
});
},

'detail': (req, res) => {
    db.Producto.findByPk(req.params.id)
    .then(producto => {
        let response = {
            
                meta:{
                    status: 200,
                    url: "api/detail/" + producto.id
                },
                data:producto,
        };
       
        console.log(".-........");
        console.log(response);
        res.json (response);

});
}
};


module.exports = productosAPIController;