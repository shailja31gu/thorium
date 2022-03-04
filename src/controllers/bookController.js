const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    let x = allBooks.length
    res.send({ total: x, allBooks })

}

const getData = async function (req, res) {
    let x = req.body
    let allBook = await BookModel.find(x)
    res.send({ allBook })
}


const UsersData = async function (req, res) {
    let y = req.body
    let allBook = await BookModel.find(y)
    res.send({ allBook })
}

const Data = async function (req, res) {
    
    let allBook = await BookModel.find({ 'prices.indianPrice' : {$in:["500INR" , "100INR" , "200INR"]}})
    res.send({ allBook })
}

const Datass = async function (req, res) {
        let allBook = await BookModel.find({$or:[{stockAvialable:true},{totalPages:{$gt:500 }}]})
        res.send({ allBook })
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getData = getData
module.exports.UsersData = UsersData
module.exports.Data = Data
module.exports.Datass = Datass


// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
// getRandomBooks - returns books that are available in stock or have more than 500 pages 
