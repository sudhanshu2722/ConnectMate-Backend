const express = require('express');
const userCntrl = require("../controller/getuserController")
const routes = express();

routes.get('/get-user/:id', userCntrl, (req, res) => {

    res.send({ message: "this is get request" })
})

routes.post('/create-user', (req, res) => {
    res.send({ message: "this is post request" })
})


module.exports = routes;