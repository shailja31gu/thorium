const axios = require("axios")

let weaTher = async function (req,res){
    try {
        let q = req.query.q
        console.log(q)
        
        
        let options = {
            method :"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=61367947f9e413d5af1e5a0739034f56`
        
        }
        let result = await axios(options)
        let data = result.data
        // console.log(data)
        res.status(200).send({status : true, result : data})
    } catch (error) {
        res.status(500).send({error : error.message})
    }
}



let arrayCites = async function (req, res) {
    try {
        let locationOfCity = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let Cityobj = []
        for (let i = 0; i < locationOfCity.length; i++){ 
            let City = { city: locationOfCity[i] }
            let option = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${locationOfCity[i]}&appid=61367947f9e413d5af1e5a0739034f56`
            }
            let result = await axios(option)
            City.temp = result.data.main.temp
            Cityobj.push(City)
    }
        let Sorted_Cities = Cityobj.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, Msg: Sorted_Cities })
    }

    catch (error) {
        res.status(500).send({ error: error.message })
    }
}


module.exports.weaTher = weaTher
module.exports.arrayCites=arrayCites