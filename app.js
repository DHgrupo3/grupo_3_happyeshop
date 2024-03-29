//Requerimos el modulo de express y almacenamos la función que nos devuelve en la constante express
//const { Router } = require('express');
const express = require('express');
const path = require('path');
//requerimos express-session//
const session = require('express-session')
const cookies = require('cookie-parser')

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');


//Ejecutamos la función y almacenamos el objeto que devuelve en la constante app. Ahora, tenemos accesos a tdoas las propiedades y métodos que nos da express.
const app = express();

const cors = require("cors");
app.use(cors());


const methodOverride = require('method-override');

//Invoco al modulo nativo path - permite generar rutas de una manera mas comoda en express
//const path = require('path');

//usando recursos estáticos
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas


//Al objeto app le pedidos el metodo listen, que se encargará de levantar el servidor. Parámetros: PUERTO | FUNCIÓN (Callback)
app.listen(3001, () => console.log ("Servidor corriendo"));

//ejecutamos express-session//

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
}));




//ejecutamos cookiparser//
app.use(cookies());

app.use(userLoggedMiddleware);

//Al objeto app le pedimos dos parámetros URL | CallBack (req, res) : Req (Toda la info de la peticón que llego) y Res (Todas la propiedades y metodos de la respuesta que vamos a enviar)
/*app.get("/", (req,res) => {
    res.render(__dirname + "/src/views/index"); ruta index desactivada
})*/
//ARRANCO CON LAS RUTAS

const mainRouter = require ('./routes/main');
const productsRouter = require ('./routes/products');
const userRouter = require ('./routes/users');
const adminRouter = require ('./routes/admin');
const { METHODS } = require('http');


//Aquí pueden colocar las rutas de las APIs
const usuarioAPIRouter = require("./routes/api/usuariosRoutes");
const productosAPIRouter = require("./routes/api/productosRoutes");
const categoriasAPIRouter = require("./routes/api/categoriasRoutes");


app.use('/', mainRouter);

app.use('/products', productsRouter);

app.use('/user', userRouter);

app.use('/admin', adminRouter);

//Aquí pueden colocar APIs
app.use("/api/usuarios", usuarioAPIRouter);
app.use("/api/productos", productosAPIRouter);
app.use("/api/categorias", categoriasAPIRouter);


//app.use('/login', userRouter);


/* Ruta register desactivada
app.get("/register", (req,res) => {
    res.render(__dirname + "/src/views/users/register");
})*/ 

 
/* Ruta login desactivada
app.get("/login", (req,res) => {
    res.render(__dirname + "/src/views/users/login");
})

/* Ruta productos desactivada
app.get("/products", (req,res) => {
    res.render(__dirname + "/src/views/products/productList");
})*/

/* Ruta cart desactivada
app.get("/cart", (req,res) => {
    res.render(__dirname + "/src/views/products/productCart");
})*/

/* Ruta who desactivada
app.get("/who", (req,res) => {
    res.render(__dirname + "/src/views/who");
})*/

/* Ruta terminos desactivada
app.get("/terminos", (req,res) => {
    res.render(__dirname + "/src/views/terminos");
})*/

/*app.get("/contactanos", (req,res) => {
    res.render(__dirname + "/src/views/contactanos");
})

app.get("/create", (req,res) => {
    res.render(__dirname + "/src/views/products/create_product");
})

app.get("/edit", (req,res) => {
    res.render(__dirname + "/src/views/products/edit_product");
})*/
