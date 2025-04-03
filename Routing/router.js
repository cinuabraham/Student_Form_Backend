const express = require('express')

const userController = require('../Controller/userController')   //import controller

const formdataController = require('../Controller/formdataController')
const jwtMiddleWare = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')

const router = new express.Router()

router.post('/user/signup',userController.signup)//register - path to resolve register request
router.post('/user/login',userController.login)//login
router.post('/formdatas/submit',jwtMiddleWare,multerConfig.single("IdImage"),formdataController.submitdata)//submit data



module.exports = router