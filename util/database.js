const Sequelize=require('sequelize')

const sequelize=new Sequelize("testproject","root","eswar7396",{
    dialect:"mysql",
    host:"localhost",
})

module.exports=sequelize