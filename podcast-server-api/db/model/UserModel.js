const Sequelize=require('sequelize');
const db=require('../config/dbconfig');

// const AlbumModel=require('./AlbumModel');

const UserModel=db.define('p_user',{
    u_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    p_id:{
        type:Sequelize.INTEGER,
    },
    i_id:{
        type:Sequelize.INTEGER,
    },
    r_id:{
        type:Sequelize.INTEGER,
    },
    s_id:{
        type:Sequelize.INTEGER,
    },
    d_id:{
        type:Sequelize.INTEGER,
    },
    u_username:{
        type:Sequelize.STRING(20),
        allowNull:false,
    },
    u_password:{
        type:Sequelize.STRING(255),
        allowNull: false,
    },
    u_picture:{
        type:Sequelize.STRING(255),
    },
    u_phone:{
        type:Sequelize.STRING(20),
    },
    u_qq:{
        type:Sequelize.STRING(20),
    },
    u_wechat:{
        type:Sequelize.STRING(30),
    },
    u_email:{
        type:Sequelize.STRING(30),
    },
    u_introduce:{
        type:Sequelize.STRING(150),
    }
},{
    freezeTableName:true,
    timestamps:false
})
//一对多的关系
// UserModel.hasMany(AlbumModel,{foreignKey:'u_id',sourceKey:'u_id'});

module.exports=UserModel;