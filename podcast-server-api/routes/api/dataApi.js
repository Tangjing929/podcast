var express = require('express');
var data = express.Router();
var DataObj = require('../../options/dbOptions').DataObj;

//数据展示：http://localhost:8089/api/showData
data.get('/showData',(req,res)=>{
    console.log(req.query.uid)
    DataObj.showData(req.query.uid).then(result=>{
        res.json(result);
        //console.log(result)
    }).catch(err=>{
        console.log(err)
    })
})

//查询用户的专辑的数据：http://localhost:8089/data_api/showAlbumData
data.get('/showAlbumData',(req,res)=>{
    console.log(req.query.uid)
    console.log(req.query.aid)
    // const ids = req.query.datas
    DataObj.showAlbumData(req.query.aid,req.query.uid).then(result => {
        // res.json(result);
        res.json({
            datas:result,
            code:Math.ceil(Math.random()*10000)
        })
    }).catch(err => {
        console.log(err)
    })
})

module.exports = data;
