var express = require('express');
var platform = express.Router();
var PlatformObj = require('../../options/dbOptions').PlatformObj;

//展示接口：http://localhost:8089/api/showPlatform
platform.get('/showPlatform',(req,res)=>{
    PlatformObj.showPlatform(req.query.pid).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err)
    })
})

//增加接口：http://localhost:8089/api/addPlatform
platform.post('/addPlatform',(req,res)=>{
    console.log(req.body.pl)
    PlatformObj.addPlatform(req.body.pl).then(result=>{
        res.json({
            code:1001,
            msg:'增加成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

//更改接口：http://localhost:8089/api/updatePlatform
platform.put('/updatePlatform',(req,res)=>{
    PlatformObj.updatePlatform(req.body).then(result=>{
        res.json({
            code:1001,
            msg:'更新成功！'
        })
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = platform;
