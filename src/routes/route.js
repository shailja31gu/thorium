const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
router.post('/createBooks', BookController.createBooks );
router.get('/getAllBooks', BookController.getBooksData)
router.get('/book-author-name', BookController.bookList)
router.post('/year-books', BookController.getBooksInYear)
router.post('/get-Particular', BookController.getParticularBooks)
router.get('/get-inr', BookController.getXINRBooks)
router.get('/get-random', BookController.getRandomBooks)
module.exports = router;