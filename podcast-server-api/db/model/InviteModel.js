const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

const InviteModel=db.define('p_invite',{
    i_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    u_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    i_user:{
        type:Sequelize.STRING(50),
    },
    //状态
    i_state:{
        type:Sequelize.STRING(20),
    },
    i_prepare:{
        type:Sequelize.STRING(20),
    },
    i_time:{
        type:Sequelize.DATE,
    },
    i_realtime:{
        type:Sequelize.DATE,
    },
    i_firsttime:{
        type:Sequelize.DATE,
    },
    i_invitetime:{
        type:Sequelize.DATE,
    }
},{
    freezeTableName:true,
    timestamps:false,
})

module.exports = InviteModel;
