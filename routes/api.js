const route = require("express").Router()
//"this route is on "/api/" path
const db = require('../db')
route.get('/persons/', (req, res) => {
    //send all the person as an array here
    db.getAllPersons()
        .then((persons) => res.send(persons))
        .catch((err) => res.send({error : err}))

})

route.post('/persons/', (req, res)=>{
    //add the new person (details are in body)
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(()=> res.redirect('/api/persons')) //redirect to get all persons data
        .catch((err)=> res.send({error:err}))

})

exports = module.exports = {
    route
}