function guestMiddleware (req, res, next) {
    if(req.session.userLogged){
       return res.redirect('/user/userProfile');
    }
    next();
};

module.exports = guestMiddleware;

