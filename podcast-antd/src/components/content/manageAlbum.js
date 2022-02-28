import React,{useState,useEffect} from "react";
import {Tabs, Table,Space,Button,Modal,message} from "antd";
import axios from "axios";
import '../css/manageAlbum.css'
import {ExclamationCircleOutlined} from "@ant-design/icons";
import UpdateAlbum from './updateAlbum';
import moment from "moment";

import {Pagination} from "antd";

const {TabPane} = Tabs;
const {Column}=Table

function AlbumTable(props){
    console.log('datas:',props.datas)
    console.log('-----------',props)
    console.log('length',props.datas.length)
    props.datas.forEach(value=>{
        if(value.a_manage==1){
            value.a_manage='已发布'
        }else if(value.a_manage==2){
            value.a_manage='待审核'
        }else if(value.a_manage==3){
            value.a_manage='审核中'
        }else if(value.a_manage==4){
            value.a_manage='审核不通过'
        }
        if(value.a_state==0){
            value.a_state='连载中'
        }else if(value.a_state==1){
            value.a_state='已完结'
        }
        value.a_time=moment(value.a_time).format('YYYY-MM-DD HH:mm:ss')
    })
    const [updateAlbum,setUpdateAlbum] = useState(false) //决定‘更新信息’的窗口的打开和关闭
    const [editRecord,setEditRecord] = useState({})  //用来存储被编辑的行（编辑修改信息）

    //----------------更改专辑信息--------------
    const closeUpdateAlbum = () => {    //关闭更新专辑窗口
        setUpdateAlbum(false)
    }
    const openUpdateAlbum = (record) =>{   //打开更新专辑信息窗口——————管理专辑的点击函数
        setUpdateAlbum(true) //窗口打开
        setEditRecord(record)
    }

    return(
        <>
            <UpdateAlbum visible={updateAlbum} closeModal={closeUpdateAlbum} editRecord={editRecord} />
            <Table
                dataSource={props.datas}
                rowKey={(record => record.id)}  //给每行设置id
                // showHeader={false}      //不显示表格头
                pagination={{
                    // showSizeChanger:true,
                    total:props.datas.length,
                    pageSize:5,
                    hideOnSinglePage:true,
                    showTotal:total=>`总共${total}条记录`
                }}
            >
                <Column dataIndex={'a_picture'} key={'apicture'} align={'center'} title={'专辑图片'}/>
                {/*<div style={{height:'100px',backgroundColor:'red'}}>*/}
                <Column dataIndex={'a_name'} key={'aname'} align={'center'} title={'专辑名称'}/>
                <Column dataIndex={'a_state'} key={'astate'} align={'center'} title={'状态'}/>
                <Column dataIndex={'a_classify'} key={'aclassify'} align={'center'} title={'分类'}/>
                {/*<Column dataIndex={'a_label2'} key={'aname'} align={'center'}/>*/}
                {/*</div>*/}
                <Column dataIndex={'a_time'} key={'atime'} align={'center'} title={'上次更改'}/>
                <Column dataIndex={'a_manage'} key={'amanage'} align={'center'} title={'审核状态'}/>
                <Column key={'action'} align={'center'} render={(record)=>(
                    <Space size={'small'}>
                        <div style={{width:'50px',lineHeight:'30px'}}>
                            <Button size={'small'} onClick={()=>{props.delAlbum(record.a_id)}}>删除专辑</Button>
                            {/*<Button size={'small'}>删除专辑</Button>*/}
                            <Button size={'small'} onClick={()=>{openUpdateAlbum(record)}}>管理专辑</Button>
                        </div>
                        {/* record代表当前行*/}
                    </Space>
                )} />
            </Table>
        </>
    )
}

function ManageAlbum(){
    const [album,setAlbum]=useState([])
    const [code,setCode]=useState(0)
    useEffect(()=>{
        getAlbum()
    },[code])
    //-----------------------获取服务器端数据：专辑信息
    const getAlbum=()=>{
        axios.get('http://localhost:8089/api/findAlbum').then(result=>{
            console.log('数据：',result.data.datas)
            const album=setAlbum(result.data.datas)
        })
    }
    //----------------------------删除专辑信息
    const deleteAlbum=(a_id)=>{
        console.log(a_id) //获取到的每一行的id
        Modal.confirm({
            title:'确定删除吗？',   //消息框的标题
            icon:<ExclamationCircleOutlined/>,
            content:'',
            okText:'确定',
            okType:'danger',
            cancelText:'取消',
            onOk:()=>{
                axios.delete('http://localhost:8089/api/deleteAlbum',{data:{aid:a_id}}).then(result=>{
                    //删除成功用于消息提示
                    message.success(result.data.msg);
                    //更新表格
                    setCode(result.data.code)
                })
            }
        })
    }

    return (
        <>
            <div className={'contentbox'}>
                <Tabs defaultActiveKey={'1'}>
                    <TabPane tab={'全部'} key={'1'} style={{marginBottom:'0'}}>
                        <AlbumTable datas={album} delAlbum={deleteAlbum}/>
                    </TabPane>
                    <TabPane tab={'已发布'} key={'2'}>
                        <AlbumTable datas={album.filter(k=>k.a_manage==1)} delAlbum={deleteAlbum}/>
                    </TabPane>
                    <TabPane tab={'待审核'} key={'3'}>
                        <AlbumTable datas={album.filter(k=>k.a_manage==2)} delAlbum={deleteAlbum}/>
                    </TabPane>
                    <TabPane tab={'审核中'} key={'4'}>
                        <AlbumTable datas={album.filter(k=>k.a_manage==3)} delAlbum={deleteAlbum}/>
                    </TabPane>
                    <TabPane tab={'审核不通过'} key={'5'}>
                        <AlbumTable datas={album.filter(k=>k.a_manage==4)} delAlbum={deleteAlbum} />
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}
export default ManageAlbum;