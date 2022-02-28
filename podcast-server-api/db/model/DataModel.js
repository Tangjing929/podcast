const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

const UserModel=require('./UserModel');

const DataModel=db.define('p_data',{
    d_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    a_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    s_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    u_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    d_amount:{
        type:Sequelize.INTEGER,
    },
    d_subscribe:{
        type:Sequelize.INTEGER,
    },
    d_time:{
        type:Sequelize.INTEGER,
    },
    d_rate:{
        type:Sequelize.DOUBLE(5,2),
    },
    d_profit: {
        type: Sequelize.DOUBLE(10,2),
    },
    d_withdrawed:{
        type:Sequelize.DOUBLE(10,2),
    },
    d_willwithidraw:{
        type:Sequelize.DOUBLE(10,2),
    },
    d_day:{
        type:Sequelize.DATE
    },
    d_type:{
        type:Sequelize.STRING(255)
    },
    d_bz:{
        type:Sequelize.STRING(255)
    }
},{
    freezeTableName:true,
    timestamps:false,
})


module.exports = DataModel;
