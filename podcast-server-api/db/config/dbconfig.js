const Sequelize = require('sequelize');

const db = new Sequelize('db_podcast','root','929TJ813',{
    host: 'localhost',
    port: 3306,
    dialect:'mysql',
    DEBUG:true,   //启动调试模式
    logging:console.log,   //输出日志信息
    pool:{
        max:40,
        min:3,
        idle:100000
    },
    timezone:'+08:00'   //时区设置
})

module.exports = db;
