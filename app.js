//Requerimos el modulo de express y almacenamos la función que nos devuelve en la constante express
const express = require('express');

//Ejecutamos la función y almacenamos el objeto que devuelve en la constante app. Ahora, tenemos accesos a tdoas las propiedades y métodos que nos da express.
const app = express();

//Invoco al modulo nativo path - permite generar rutas de una manera mas comoda en express
const path = require('path');

//usando recursos estáticos
app.use(express.static('public'));

//Al objeto app le pedidos el metodo listen, que se encargará de levantar el servidor. Parámetros: PUERTO | FUNCIÓN (Callback)
app.listen(3000, () => console.log ("Servidor corriendo"));

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

app.get("/product", (req,res) => {
    res.sendFile(__dirname + "/views/productDetail.html");
})

