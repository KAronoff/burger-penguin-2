
const db = require("../models/burgermodel");

module.exports = app => {

  
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({})
    .then( dbBurger => {
      res.json(dbBurger);
    })
    .catch( err => {
      if (err){
        res.json(err);
      }
    });
  });

  
  app.post("/api/burgers", function(req, res) {
    // pass req.body into create method 
    // req.body => {name: "catty cat"}
    
    db.Burger.create(req.body)
    .then(dbBurger => {
      res.json(dbBurger);
    })
    .catch( err => {
      if (err){
        res.json(err)
      };
    });
    });


  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
    // req.body => {sleepy: true} || {sleepy : false}
    db.Burger.update({
      isDevoured: req.body.isDevoured
    }, {where: {id: req.params.id}})
    .then( dbBurger => {
      res.json(dbBurger)
    })
    .catch( err => {
      if (err){
        res.json(err);
      }
    })
  });

  
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({where: {id: req.params.id}})
    .then(dbBurger => {
      res.json(dbBurger)
    })
    .catch( err => {
      if (err){
        res.json(err)
      };
    });
  });
}
