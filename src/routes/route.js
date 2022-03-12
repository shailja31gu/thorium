const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const Bookcontroller=require("../book/bookcontroller")
// const Getbooklist=require("../getlist/getbooklist")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/shailja",Bookcontroller.createbook)
router.get("/getcreatebook",Bookcontroller.getbook)

module.exports = router;