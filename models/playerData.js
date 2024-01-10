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
        type:Sequelize.TEXT,
        allowNull:false
    },
    noOfMatches:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    highestScore:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    halfCenturies:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    centuries:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    wickets:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    average:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=Player

