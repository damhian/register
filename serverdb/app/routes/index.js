const cors = require("cors");
const router = require('express').Router()
const user = require('./user')


router.use("/user",cors(),user)


module.exports = router