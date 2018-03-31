// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/inventories", function(req, res) {
    db.inventory.findAll({
      include:[db.user]
    }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log("this is findall" +results)
    });
  });

  app.get("/api/allinventories", function(req, res) {
    db.inventory.findAll({
      where:{usertype: "grocery"},
      include:[db.user]
    }).then(function(results) {
      console.log("this is findall features" + results)
      res.json(results);
    });
  });

  app.post("/api/inventories", function(req, res) {
    db.user.findOne({where:{username:req.body.username}
    }).then(function(result){
      var id = result.id;
      var fullInventoryObject = req.body;
      fullInventoryObject.userId = id;

      db.inventory.create(fullInventoryObject).then(function(results) {
        console.log("this is api post" +results)
        res.json(results);
      })
    });
  });

  // app.delete("/api/inventories/:id",function(req,res){
  //   db.Inventory.destory({
  //     where:{
  //       id: req.params.id
  //     }
  //   }).then(function(dbInventory){
  //     res.json(dbInventory);
  //   })


  // })
  // app.put("/api/posts",function(req,res){

  //   db.Inventory.update({
  //     req.body,
  //     {
  //       where:{
  //         id:req.body.id
  //       }
  //     }
  //   }).then(function(dbInventory){
  //     res.json(dbInventory)
  //   })
  // })

};
