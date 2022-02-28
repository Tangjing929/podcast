import React, {useEffect, useState} from "react";
import { Table } from "antd";
import axios from "axios";
import Column from "antd/es/table/Column";
import {NavLink} from "react-router-dom";
import '../css/income_data.css'

const useIncome_data = ([])=>{
    const [income_data,setIncome_data] = useState([])
    //const [code,setCode] = useState(0)

    useEffect(()=>{
        axios.get('http://localhost:8089/api/showData',{params:{uid:'1'}}).then(result=>{
            console.log('income:',result.data)
            setIncome_data(result.data)
            //setCode(result.data.code)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return [income_data]
}

export default function Income_data(props){
    const [income_data] = useIncome_data([])

    //var dtypemoney = 0
    var totaldprofit = 0
    var totaldwithdrawed = 0
    var totaldwillwithidraw = 0
    income_data.forEach(val=>{
        totaldprofit+=val.d_profit
        totaldwithdrawed+=val.d_withdrawed
        totaldwillwithidraw+=val.d_willwithidraw
        // if(val.d_type==="已提现"){
        //     dtypemoney = val.d_withdrawed
        // }else if(val.d_type==="未提现"){
        //     dtypemoney = val.d_willwithidraw
        // }
    })
    console.log(totaldprofit)


    return(
        <div>
            <div style={{background:'#fff0bc',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'10px',marginBottom:'15px'}}>
                <div style={{fontSize:'13px',color:'#7c5525',marginLeft:'30px',marginTop:'15px'}}>
                    您还未完成实名认证，专辑和节目无法发布上线，请尽快完成实名认证
                </div>
                <div style={{width:'80px',height:'40px',background:'#fffcf2',color:'#7c5525',fontSize:'14px',borderRadius:'6px',border:'0',marginRight:'20px'}}>
                    <NavLink to={'/realname'}>去认证</NavLink>
                </div>
                                                                                                                                                                                                                                                                                                                                                                                                </div>
            <div style={{float:'left',backgroundColor:'white',height:150,width:260,borderRadius:'5%'}}>
                <div style={{height:20,width:90,float:'left',marginLeft:5,marginTop:5}}>
                    <img style={{width:40,height:40}} src="https://h5static.kuwo.cn/www/ugc/img/icon1.81ae233.png"/>
                    <span>总收益</span>
                </div><br/><br/>
                <div style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{totaldprofit}元</div>
                {/*{*/}
                {/*    income_data.map((p_data)=>{*/}
                {/*        return(*/}
                {/*            <div style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{p_data.dprofit}元</div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*<div dataIndex="dprofit" key="dprofit" style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{p_data.dprofit}元</div>*/}
            </div>
            <div style={{float:'left',backgroundColor:'white',height:150,width:260,borderRadius:'5%',marginLeft:27}}>
                <div style={{height:20,width:90,float:'left',marginLeft:5,marginTop:5}}>
                    <img style={{width:40,height:40}} src="https://h5static.kuwo.cn/www/ugc/img/icon2.73b438a.png"/>
                    <span>已提现</span>
                </div><br/><br/>
                <div style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{totaldwithdrawed}元</div>
                {/*{*/}
                {/*    income_data.map((p_data)=>{*/}
                {/*        return(*/}
                {/*            <div style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{p_data.dwithdrawed}元</div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*<div dataIndex="dwithdrawed" key="dwithdrawed" style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{p_data.dwithdrawed}元</div>*/}
            </div>
            <div style={{float:'left',backgroundColor:'white',height:150,width:260,borderRadius:'5%',marginLeft:27}}>
                <div style={{height:20,width:90,float:'left',marginLeft:5,marginTop:5}}>
                    <img style={{width:40,height:40}} src="https://h5static.kuwo.cn/www/ugc/img/icon3.0bb2ff6.png"/>
                    <span>可提现</span>
                </div><br/><br/>
                <div style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{totaldwillwithidraw}元</div>
                {/*{*/}
                {/*    income_data.map((p_data)=>{*/}
                {/*        return(*/}
                {/*            <div dataIndex="dwillwithidraw" key="dwillwithidraw" style={{fontSize:'24px',color:'#333',textAlign:'center',marginTop:'9px'}}>{p_data.dwillwithidraw}元*/}
                {/*                <p style={{fontSize:'14px',color:'#bfbfbf',textAlign:'center',marginTop:'17px'}}>满200才可提现</p>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
            <div style={{width:'100%',background:'#fff',padding:'20px 30px 30px',borderRadius:'10px',marginTop:'180px',textAlign:'left'}}>
                官方公告
                <span style={{fontSize:'14px',fontWeight:'400',color:'#bfbfbf', marginLeft:'6px'}}>亲爱的主播，结算前请您务必了解我们的激励计划</span>
                <div style={{paddingLeft:'18px',fontSize:'14px',position:'relative',color: '#333'}}>
                    <a href="https://mp.kuwo.cn/news/47">《声浪计划》</a>
                    是由TME播客创作中心发起的现金激励活动，通过上传优质原创内容，获得现金激励。
                    <br/><br/>
                    <a href="https://mp.kuwo.cn/news/29">《收益FAQ及提现必看(试运行版本)》</a>
                </div>
            </div>
            {/*<div style={{marginTop:'20px',borderRadius:'10px',background:'#fff',minHeight:'500px'}}>*/}
                <Table
                    dataSource={ income_data }
                    //rowKey = {(record) => record.uid}
                >
                    <Column dataIndex={"d_day"} key={"d_day"} title={"日期"} align={"center"}/>
                    <Column dataIndex={"d_type"} key={"d_type"} title={"类型"} align={"center"}/>
                    <Column dataIndex={"d_profit"} key={"d_profit"} title={"金额（元）"} align={"center"} />
                    <Column dataIndex={"d_bz"} key={"d_bz"} title={"备注"} align={"center"}/>
                </Table>
                {/*<img src="https://h5static.kuwo.cn/www/ugc/img/nodata.c5fe324.png"/>
                <span>收入数据月度统计中</span>*/}
            {/*</div>*/}
        </div>
    )
}
