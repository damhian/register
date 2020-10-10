const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./app/routes")
const app = express();


app.use(cors({
  origin: "http://localhost:3000"
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.use(router)

const db = require("./app/models");
db.sequelize.sync();

// for devs
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});