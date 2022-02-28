var express=require('express');
var program=express.Router();
var ProgramObj=require('../../options/dbOptions').ProgramObj

//上传节目：http://localhost:8089/program_api/addProgram
program.post('/addProgram',(req,res)=>{
    console.log(req.body.datas)
    let program=req.body.datas;
    ProgramObj.addProgram(program).then(result=>{
        res.json({
            code:1010,
            msg:'添加节目成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

module.exports=program;