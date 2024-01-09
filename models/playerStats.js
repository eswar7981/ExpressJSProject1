const { Sequelize } = require("sequelize");
const sequelize=require('../util/database')

const PlayerStats=sequelize.define('PlayerStats',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    }
})

module.exports=PlayerStats