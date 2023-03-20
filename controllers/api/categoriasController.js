const db = require("../../database/models");

const categoriasAPIController = {
    'list':(req,res)=> {
        db.Categoria.findAll().then((categoria) => {
            let response = {
        meta: {
            status: 200,
            total: categoria.length,
            url: "api/categoria",
        },
        data: categoria,
    };

    res.json (response);
});
},

'detail': (req, res) => {
    db.Categoria.findByPk(req.params.id)
    .then(categoria => {
        let response = {
            
                meta:{
                    status: 200,
                    url: "api/detail/" + categoria.id
                },
                data:categoria,
        };
       
        console.log(".-........");
        console.log(response);
        res.json (response);

});
}
};


module.exports = categoriasAPIController;