const express = require('express');
const userCntrl = require("../controller/getuserController")
const createUserCntrl = require("../controller/createUserController")
const { getUserValidator, creatUserValidator } = require("../validator/reqValidator")
const routes = express();

routes.get('/get-user/:id', getUserValidator, userCntrl)

routes.post('/create-user', creatUserValidator, createUserCntrl)


module.exports = routes;