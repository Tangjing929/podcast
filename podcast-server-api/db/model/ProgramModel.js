const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

const ProgramModel=db.define('p_program',{
        pro_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        a_id:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        a_name:{
            type:Sequelize.STRING(50)
        },
        pro_name:{
            type:Sequelize.STRING(50)
        },
        program:{
            type:Sequelize.STRING(255)
        }
    },
    {
        freezeTableName:true,
        timestamps:false,
    })
module.exports = ProgramModel;