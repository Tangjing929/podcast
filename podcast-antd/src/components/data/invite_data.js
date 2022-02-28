import React, {useEffect, useState} from "react";
import {Table,Form, DatePicker} from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";    //使日期变成中文
import moment from "moment";
import 'moment/locale/zh-cn';
import axios from "axios";
import Column from "antd/es/table/Column";
//import "../../index.css"

const disabledDate = (current) =>{  //设置选择日期为今天之前
    //console.log(current)
    return current > moment().startOf('day')
}

export default function Invite_data(props){
    const [cxinvite_data,setCxinvite_data] = useState("")
    const [invite_data,setInvite_data] = useState([])

    // const [invite_data] = useInvite_data([])
    // const day1 = "2021-11-29"
    // const day = moment(day1).format('YYYY-MM-DD')

    const dataChg=(value)=>{
        console.log(']]]]]]]]]]]]',value)
        setCxinvite_data(value)
    }
    const cxInviteRef = React.createRef();
    // const [iinvitetime,setIinvitetime] = useState("")
    // const onChange = (date,dateString)=>{
    //     setIinvitetime(dateString);
    //     console.log(date,dateString)
    // }
    // console.log(iinvitetime)
    const cxInvite = async ()=>{
        await cxInviteRef.current.validateFields().then(value=>{
            console.log(value.date._d)
            const day = moment(value.date._d).format('YYYY-MM-DD')
            console.log(day)
            axios.get('http://localhost:8089/api/showInvite',{params:{uid:'1',iinvitetime:day}}).then(result=>{
                // console.log('111',result.date)
                //const i_invitetime = moment(result.data.i_invitetime).format('YYYY-MM-DD')
                //console.log('111',i_invitetime)
                console.log(result.data)
                setInvite_data(result.data)
            }).catch(err=>{
                console.log(err)
            })
        })
    }

    return(
        <div>
            <div style={{margin:'0',padding:'0'}}>
                <a href="#">
                    <img style={{width:'100%',height:100}} src="https://ossfile.kuwo.cn/group2/M00/02/54/CgCHA2GnICuAQusMAACDvhAYXwg806.png"/>
                </a>
            </div>
            <Form ref={cxInviteRef} style={{width:'100%',minHeight:'70px',background:'#fff',marginTop:'20px',borderRadius:'10px'}}>
                <div style={{float:'left',height:'50px',width:'250px'}}>
                    <p style={{fontWeight:'bolder',fontSize:'14px',align:'center',lineHeight:'70px'}}>我的邀请码：E96DLNZM34</p>
                </div>

                {/*<div style={{alignItems:'center',fontSize:'12px',color:'#2b9ff8',cursor:'pointer',marginLeft:'6px'}}>*/}
                {/*    <img style={{height:'18px',marginRight:'1px'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4w…gICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="/>*/}
                {/*    复制*/}
                {/*</div>*/}

                {/*
                    邀请日期--->邀请月份
                */}
                <Form.Item style={{marginTop:'18px',float:'left'}} label={'邀请月份'} name={'date'}>
                    {/*<p style={{fontSize:'14px',align:'center',lineHeight:'70px'}}>邀请月份：</p>*/}
                    <DatePicker
                        // defaultValue={moment('','YYYY-MM-DD')}
                        //value={moment().valueOf()}
                        //defaultValue={moment('','YYYY-MM-DD')}
                        // format='YYYY-MM-DD'
                        // value={new Date(timechange1.datam1)}
                        // onChange={date=>timechange1(date)}
                        onChange={cxInvite}
                        disabledDate={disabledDate} locale={locale} style={{borderRadius:'5%',height:'30px',background:'rgba(0,0,0,.03)',margin:'-15px 0 0 0'}}/>
                </Form.Item>
                {/*<div style={{float:'left',display:'flex',alignItems:'center'}}>
                    <button style={{width:'100px',height:'30px',backgroundColor:'#2b9ff8',border:'0'}}></button>
                </div>*/}
                <Form.Item style={{marginTop:'18px',float:'left',marginLeft:'50px'}} label={'邀请状态'} name={'state'}>
                    {/*<p style={{fontSize:'14px',align:'center',lineHeight:'70px'}}>邀请状态：</p>*/}
                    <select style={{border:'0',width:'130px',borderRadius:'5%',height:'30px',background:'rgba(0,0,0,.03)',margin:'-15px 0 0 0'}} text='请选择'>
                        <option value="全部">全部</option>
                        <option value="已注册">已注册</option>
                        <option value="已实名">已实名</option>
                        <option value="已上传节目">已上传节目</option>
                    </select>
                </Form.Item>
                {/*<div style={{float:'left',display:'flex',alignItems:'center',}}>
                    <button style={{backgroundColor:"#6d9eeb",float:'left',marginLeft:'100px',marginTop:'20px',border:0,height:'30px',width:'100px',borderRadius:"10%"}}>查询</button>
                </div>*/}
            </Form>
            <div>
                <Table
                    dataSource={ invite_data }
                >
                    <Column dataIndex={"i_user"} key={"i_user"} title={"主编"} align={"center"}/>
                    <Column dataIndex={"i_state"} key={"i_state"} title={"状态"} align={"center"}/>
                    <Column dataIndex={"i_prepare"} key={"i_prepare"} title={"待办"} align={"center"}/>
                    <Column dataIndex={"i_time"} key={"i_time"} title={"注册时间"} align={"center"}/>
                    <Column dataIndex={"i_realtime"} key={"i_realtime"} title={"实名时间"} align={"center"}/>
                    <Column dataIndex={"i_firsttime"} key={"i_firsttime"} title={"首次上传时间"} align={"center"}/>
                </Table>
            </div>
        </div>
    )
}
