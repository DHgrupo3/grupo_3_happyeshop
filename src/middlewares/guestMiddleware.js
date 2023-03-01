function guestMiddleware (req, res, next) {


console.log("---------------------");
console.log("    En Guest MDW     ");
console.log(res.locals.userLogged);
console.log("                     ");
console.log("---------------------");

    if(req.session.userLogged){
    
        let user = req.session.userLogged; 
        
        return res.render ('./users/userProfile',{user:user})
    }
    next();
};

module.exports = guestMiddleware;

