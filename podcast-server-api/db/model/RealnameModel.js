const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

const RealnameModel=db.define('p_realname',{
    r_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    u_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    r_name:{
        type:Sequelize.STRING(10),
        allowNull: false,
    },
    r_cardtype:{   //证件类型
      type:Sequelize.INTEGER,
      allowNull:false
    },
    r_identity:{
        type:Sequelize.STRING(20),
        allowNull:false,
    },
    r_fphoto:{
        type:Sequelize.STRING(255),
    },
    r_bphoto:{
        type:Sequelize.STRING(255),
    },
    r_hphoto:{
        type:Sequelize.STRING(255),
    },
    // //证件类型
    // r_timetype:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    // },
    r_endtime:{
        type:Sequelize.DATE,
    }
},{
    freezeTableName:true,
    timestamps:false,
})

module.exports = RealnameModel;