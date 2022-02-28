const Sequelize=require('sequelize');
const db = require('../config/dbconfig');

const UserModel=require('./UserModel');

const AlbumModel=db.define('p_album',{
    a_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    u_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    d_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    a_name:{
        type:Sequelize.STRING(20),
        allowNull:false,
    },
    a_introduce:{
        type:Sequelize.STRING(200),
        allowNull:false,
    },
    a_picture:{
        type:Sequelize.STRING(255),
        allowNull:false,
    },
    a_brief:{
        type:Sequelize.STRING(20),
        allowNull:false,
    },
    a_classify:{
        type:Sequelize.STRING(10),
        allowNull:false,
    },
    a_label1:{
        type:Sequelize.STRING(10),
        allowNull:false,
    },
    a_label2:{
        type:Sequelize.STRING(10),
        allowNull:false,
    },
    a_author:{
        type:Sequelize.STRING(10),
    },
    //连载状态 连载或完结
    a_state:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    a_time:{
        type:Sequelize.DATE,
    },
    a_sum:{
        type:Sequelize.INTEGER,
    },
    //排序 正序或倒序
    a_sort:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    a_song:{
        type:Sequelize.STRING(20),
    },
    a_songname:{
        type:Sequelize.STRING(20),
    },
    //是否首发
    a_starting:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    //是否开启、关闭
    a_poster:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    a_manage:{
        type:Sequelize.INTEGER,
    }
},{
    freezeTableName:true,
    timestamps:false,
})

// foreignKey 外键列名（当前模型对应表的外键列名） targetKey 关联模型的主键属性名

AlbumModel.belongsTo(UserModel,{foreignKey:'u_id',targetKey:'u_id'})

module.exports = AlbumModel;