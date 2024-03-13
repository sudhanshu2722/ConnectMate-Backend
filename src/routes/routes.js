const express = require('express');
const userCntrl = require("../controller/getuserController")
const createUserCntrl = require("../controller/createUserController")
const loginCntrl = require("../controller/loginController")
const signUpCntrl = require("../controller/signUpController")
const { getUserValidator, creatUserValidator, userLoginValidator, signUpValidator } = require("../validator/reqValidator")
const routes = express();

routes.post('/login', userLoginValidator, loginCntrl)

routes.post('/sign-up', signUpValidator, signUpCntrl)

routes.get('/get-user/:id', getUserValidator, userCntrl)

routes.post('/create-user', creatUserValidator, createUserCntrl)


module.exports = routes;