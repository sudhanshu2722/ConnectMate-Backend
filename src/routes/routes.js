const express = require('express');
const userCntrl = require("../controller/getuserController")
const createUserCntrl= require("../controller/createUserController")
const routes = express();

routes.get('/get-user/:id', userCntrl, (req, res) => {

    res.send({ message: "this is get request" })
})

routes.post('/create-user',createUserCntrl, (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


module.exports = routes;