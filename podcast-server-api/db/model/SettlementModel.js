const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

const SettlementModel=db.define('p_settlement',{
    s_id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    u_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    d_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    s_bank:{
        type:Sequelize.STRING(20),
    },
    s_bnumber:{
        type:Sequelize.STRING(20),
    },
    s_bankname:{
        type:Sequelize.STRING(20),
    },
    s_phone:{
        type:Sequelize.STRING(20),
    },
    s_address:{
        type:Sequelize.STRING(50),
    },
    s_fpicture:{
        type:Sequelize.STRING(255),
    },
    s_bpicture:{
        type:Sequelize.STRING(255),
    }
},{
    freezeTableName:true,
    timestamps:false,
})

module.exports = SettlementModel;