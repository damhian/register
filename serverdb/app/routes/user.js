
    const user = require("../controllers/controller");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", user.create);
  
    // Retrieve all user 
    router.get("/", user.findAll);
  
    // Find all with condition
    // router.get("/published", user.findAllPublished);
  
    // Retrieve a user by id
    router.get("/:id", user.findOne);
  
    // Update user data by id
    router.put("/:id", user.update);
  
    // Delete user by id
    router.delete("/:id", user.delete);
  
    // Delete all user data
    router.delete("/", user.deleteAll);

module.exports = router
