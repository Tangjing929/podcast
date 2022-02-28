var express = require('express');
var settlement = express.Router();
var SettlementObj = require('../../options/dbOptions').SettlementObj;

//查询接口：http://localhost:8089/api/showSettlement
settlement.get('/showSettlement',(req,res)=>{
    SettlementObj.showSettlement(req.query.sid).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err)
    })
})

//增加接口：http://localhost:8089/api/addSettlement
settlement.post('/addSettlement',(req,res)=>{
    console.log(req);
    SettlementObj.addSettlement(req.body.sett).then(result=>{
        res.json({
            code:1002,
            msg:'增加成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = settlement;
