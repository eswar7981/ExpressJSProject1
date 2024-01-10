const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Player=require('./models/playerData')


const playerRoutes = require('./routes/playerStats');
const sequelize = require("./util/database");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "css")));

app.use('/playerstats',playerRoutes)



sequelize.sync().then(
    app.listen(3000)
).catch((err)=>console.log(err))
