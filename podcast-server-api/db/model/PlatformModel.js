const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

const PlatformModel=db.define('p_platform',{
    p_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    u_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    p_name:{
        type:Sequelize.STRING(20),
    },
    p_username:{
        type:Sequelize.STRING(20),
    },
    p_fans:{
        type:Sequelize.INTEGER,
    },
    p_amount:{
        type:Sequelize.INTEGER,
    },
    p_link:{
        type:Sequelize.STRING(50),
    },
    p_picture:{
        type:Sequelize.STRING(255),
    }
},{
    freezeTableName:true,
    timestamps:false,
})

module.exports = PlatformModel;