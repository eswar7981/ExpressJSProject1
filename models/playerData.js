const sequelize = require("../util/database");
const Sequelize=require('sequelize')

const Player=sequelize.define('Player',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    DOB:{
        type:Sequelize.STRING,
        allowNull:false
    },
    photoURL:{
        type:Sequelize.STRING,
        allowNull:false
    },
    birthPlace:{
        type:Sequelize.STRING,
        allowNull:false
    },
    career:{
        type:Sequelize.STRING,
        allowNull:false
    },
    noOfMatches:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    highestScore:{
        type:Sequelize.INTEGER
    },
    halfCenturies:{
        type:Sequelize.INTEGER
    },
    centuries:{
        type:Sequelize.INTEGER
    },
    wickets:{
        type:Sequelize.INTEGER
    },
    average:{
        type:Sequelize.INTEGER
    }
})

module.exports=Player

