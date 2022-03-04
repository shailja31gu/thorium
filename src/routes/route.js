const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")


router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

router.post("/bookdata", BookController.getData)

router.post("/UserData", BookController.UsersData)

router.get("/UserDetails", BookController.Data)

router.get("/UserAlDetails", BookController.Datass)

module.exports = router;