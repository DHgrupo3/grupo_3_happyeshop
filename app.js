//Requerimos el modulo de express y almacenamos la función que nos devuelve en la constante express
const express = require('express');

//Ejecutamos la función y almacenamos el objeto que devuelve en la constante app. Ahora, tenemos accesos a tdoas las propiedades y métodos que nos da express.
const app = express();

//Invoco al modulo nativo path - permite generar rutas de una manera mas comoda en express
const path = require('path');

//usando recursos estáticos
app.use(express.static('public'));

app.set('view engine', 'ejs');

//Al objeto app le pedidos el metodo listen, que se encargará de levantar el servidor. Parámetros: PUERTO | FUNCIÓN (Callback)
app.listen(3000, () => console.log ("Servidor corriendo"));

//Al objeto app le pedimos dos parámetros URL | CallBack (req, res) : Req (Toda la info de la peticón que llego) y Res (Todas la propiedades y metodos de la respuesta que vamos a enviar)
app.get("/", (req,res) => {
    res.render(__dirname + "/src/views/index");
})

app.get("/register", (req,res) => {
    res.render(__dirname + "/src/views/users/register");
})

app.get("/login", (req,res) => {
    res.render(__dirname + "/src/views/users/login");
})

app.get("/products", (req,res) => {
    res.render(__dirname + "/src/views/products/productList");
})

app.get("/cart", (req,res) => {
    res.render(__dirname + "/src/views/products/productCart");
})

app.get("/who", (req,res) => {
    res.render(__dirname + "/src/views/who");
})

app.get("/terminos", (req,res) => {
    res.render(__dirname + "/src/views/terminos");
})

app.get("/contactanos", (req,res) => {
    res.render(__dirname + "/src/views/contactanos");
})

app.get("/create", (req,res) => {
    res.render(__dirname + "/src/views/products/create_product");
})

app.get("/edit", (req,res) => {
    res.render(__dirname + "/src/views/products/edit_product");
})
