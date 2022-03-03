const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel = require("../models/newPublisher")


const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher_id

    if(!authorId) return res.send(' Not valid.')

    let author = await authorModel.findById(authorId)
    if(!author) return res.send('Not valid  authorId')


    if(!publisherId) return res.send('Not valid as the publisher.') 

    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('Not valid as no publisher.')


    console.log(book)
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

module.exports.createBook= createBook
module.exports.getBooks= getBooks
