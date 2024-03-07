const express = require('express');
const userCntrl = require("../controller/getuserController")
const createUserCntrl = require("../controller/createUserController")
const loginCntrl = require("../controller/loginController")
const { getUserValidator, creatUserValidator, userLoginValidator } = require("../validator/reqValidator")
const routes = express();

routes.post('/login', userLoginValidator, loginCntrl)

routes.get('/get-user/:id', getUserValidator, userCntrl)

routes.post('/create-user', creatUserValidator, createUserCntrl)


module.exports = routes;