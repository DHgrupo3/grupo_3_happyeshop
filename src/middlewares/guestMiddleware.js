function guestMiddleware (req, res, next) {
    if(req.session.userLogged){
        res.redirect('./userProfile');
    }
    next();
};

module.exports = guestMiddleware;

