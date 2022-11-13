var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/main');
var usersRouter = require('./routes/users');

var ABMRouter = require('./routes/ABMProductos');
var contactRouter = require('./routes/contactanos');
var loginRouter = require('./routes/login');
var cartRouter = require('./routes/productCart');
var detailRouter = require('./routes/products');
var listRouter = require('./routes/productList');
var registerRouter = require('./routes/register');
var terminosRouter = require('./routes/terminos');
var whoRouter = require('./routes/who');

var app = express();

//usando recursos estáticos
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//confguro las distintas vistas
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/ABM',ABMRouter);
app.use('/contact',contactRouter);
app.use('/login',loginRouter);
app.use('/cart',cartRouter);
app.use('/detail',detailRouter);
app.use('/list',listRouter);
app.use('/register',registerRouter);
app.use('/terminos',terminosRouter);
app.use('/who',whoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Al objeto app le pedidos el metodo listen, que se encargará de levantar el servidor. Parámetros: PUERTO | FUNCIÓN (Callback)
// app.listen(3000, () => console.log ("Servidor corriendo"));

//Al objeto app le pedimos dos parámetros URL | CallBack (req, res) : Req (Toda la info de la peticón que llego) y Res (Todas la propiedades y metodos de la respuesta que vamos a enviar)
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/register", (req,res) => {
    res.sendFile(__dirname + "/views/register.html");
})

app.get("/login", (req,res) => {
    res.sendFile(__dirname + "/views/login.html");
})

app.get("/products", (req,res) => {
    res.sendFile(__dirname + "/views/productList.html");
})

app.get("/cart", (req,res) => {
    res.sendFile(__dirname + "/views/productCart.html");
})

app.get("/who", (req,res) => {
    res.sendFile(__dirname + "/views/who.html");
})

app.get("/terminos", (req,res) => {
    res.sendFile(__dirname + "/views/terminos.html");
})

app.get("/contactanos", (req,res) => {
    res.sendFile(__dirname + "/views/contactanos.html");
})

module.exports = app;
