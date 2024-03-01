const express = require('express');
const router = express.Router();
const mid = require('../middleware/postmid')
const userController = require('../controller/usersController')


router.get('/', userController.getUsers);// GET all users
router.post('/signup', userController.createUser); // Create a new user
router.post('/login', userController.loginUser)


module.exports = router

