//Requerimos el modulo de express y almacenamos la función que nos devuelve en la constante express
//const { Router } = require('express');
const express = require('express');
const path = require('path');

//Ejecutamos la función y almacenamos el objeto que devuelve en la constante app. Ahora, tenemos accesos a tdoas las propiedades y métodos que nos da express.
const app = express();

//Invoco al modulo nativo path - permite generar rutas de una manera mas comoda en express
//const path = require('path');

//usando recursos estáticos
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas


//Al objeto app le pedidos el metodo listen, que se encargará de levantar el servidor. Parámetros: PUERTO | FUNCIÓN (Callback)
app.listen(3000, () => console.log ("Servidor corriendo"));

//Al objeto app le pedimos dos parámetros URL | CallBack (req, res) : Req (Toda la info de la peticón que llego) y Res (Todas la propiedades y metodos de la respuesta que vamos a enviar)
/*app.get("/", (req,res) => {
    res.render(__dirname + "/src/views/index"); ruta index desactivada
})*/
//ARRANCO CON LAS RUTAS

const mainRouter = require ('./routes/main');
const productsRouter = require ('./routes/products');

app.use('/', mainRouter);
app.use('/who', mainRouter);
app.use('/terminos', mainRouter);


app.use('/products', productsRouter);//no puedo llegar a la pagina
app.use('/cart', productsRouter);//no puedo llegar a la pagina

app.use('/register', productsRouter);//no puedo llegar a la pagina


/* Ruta register desactivada
app.get("/register", (req,res) => {
    res.render(__dirname + "/src/views/users/register");
})*/ 

 
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

app.get("/contactanos", (req,res) => {
    res.render(__dirname + "/src/views/contactanos");
})

app.get("/create", (req,res) => {
    res.render(__dirname + "/src/views/products/create_product");
})

app.get("/edit", (req,res) => {
    res.render(__dirname + "/src/views/products/edit_product");
})
