const bookmodel =require('../models/bookmodel')
const createbook = async function(req,res){
    let data =req.body
    let savedata= await bookmodel.create(data)
    res.send(savedata)

}
 
const getbook = async function(req,res){
    let booklist = await bookmodel.find()
    res.send(booklist)
}

module.exports.getbook=getbook

module.exports.createbook=createbook
