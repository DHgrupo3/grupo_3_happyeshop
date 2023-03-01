const User = require ('../models/user')

//Conexión a Base de Datos
const db = require("../../database/models");

function userLoggedMiddleware(req, res, next){

    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
    //let userFromCookie = User.findByField('email', emailInCookie);
    
    console.log("---------------------");
    console.log("  Usuario en Cookie  ");
    console.log(emailInCookie);
    console.log("                     ");
    console.log("---------------------");

        if (emailInCookie != undefined) {
    
            db.Usuario.findOne({ 
            where: {
                    email: emailInCookie
                }}).then (function(userFromCookie) {
                    if (userFromCookie){
                        req.session.userLogged = userFromCookie;
                    }
                })

                if (userFromCookie){
                    req.session.userLogged = userFromCookie;
                }
        } else {

            console.log("---------------------");
            console.log("  Usuario Logeado!  ");
            console.log(req.session.userLogged);
            console.log("                     ");
            console.log("---------------------");
        
            if (req.session.userLogged) {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }
        }


    next();
}

module.exports = userLoggedMiddleware;