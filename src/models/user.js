// 1. Guardar al usuario en la DB
// 2. Buscar al usuario que se requiere loguear por su email
// 3. Buscar a un usuario por su ID
// 4. Editar la información de un usuario 
// 5. Eliminar a un usuario de la DB

const express = require('express');
const path = require('path');
const fs = require('fs');
const {json} = require('express');

const User = {
    fileName: '../database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, this.fileName),  'utf-8'));
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
             return lastUser.id + 1;
        }
       return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id );
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text );
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(path.resolve(__dirname,this.fileName), JSON.stringify(allUsers, null, ' '))
        return newUser;
    },

    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(path.resolve(__dirname,this.fileName), JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;

//Test Script

/*

//Generar ID
console.log(User.generateId());

//Buscar a todos los Usuarios
console.log(User.findAll());

//Buscar Usuario por ID
console.log(User.findByPk(2));

//Buscar Usuario por campo
console.log(User.findByField('nombre','Emilio'));

//Crear Usuario
console.log(User.create({
        id: User.generateId(),
        nombre: "Emilio",
        apellido: "Buzzi",
        email: "enbuzzi@outlook.com",
        contraseña: "1234",
        categoria: 3,
        imagen: "Iguana.jpg"
       }
));

//Borrar Usuario
console.log(User.delete(User.generateId-1));

*/





