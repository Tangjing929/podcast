import React,{useState} from "react";
import {Button,Modal, message, Form, Input, Select} from "antd";
import {AppstoreAddOutlined,CloudUploadOutlined} from '@ant-design/icons';
import '../css/uploadAlbum.css'
import {NavLink} from "react-router-dom";
import {createRef} from "react";
import Draggable from "react-draggable";
import axios from "axios";

const {Option}=Select;


function UploadAlbumModal(props){

    const [uploadAlbum,setUploadAlbum]=useState([])

    //--------------------设置Modal消息框可以移动---------------------

    const [disabled2,setDisabled2]=useState(true)   //用来控制Modal是否可以移动，初始状态为不可移动
    const [bounds2,setBounds2]=useState({left:0,top:0,bottom:0,right:0})         //用来控制对话框拖拽的范围
    const draggableRef=React.createRef()   //和可以拖拽组件Draggable进行绑定
    const onStart=(event,uiData)=>{
        //浏览器的窗口的高度和宽度
        const {clientWidth,clientHeight}=window.document.documentElement;    //解构赋值获取浏览器窗口的宽度和高度
        const targetReact=draggableRef.current.getBoundingClientRect();     //获取窗口中显示的包含Modal的div
        setBounds2({
            bounds:{
                left:-targetReact.left+uiData.x,
                right:clientWidth-(targetReact.right-uiData.x),
                top:-targetReact.top+uiData.y,
                bottom:(targetReact.bottom-uiData.y)
            }
        })
    }


    const getAlbumName=()=>{     //查找专辑————得到专辑名称
        axios.get('http://localhost:8089/api/findAlbum').then(result=>{
            console.log('数据：',result.data.datas)
            const uploadAlbum=setUploadAlbum(result.data.datas)
        })
    }
    // console.log('============',uploadAlbum)

    const uploadAlbumRef=createRef();

    return (
        <>
            <Modal
                title={<div style={{
                    width:'100%',
                    cursor:'move'
                }}
                            onMouseMove={()=>{
                                if(disabled2){
                                    setDisabled2(false)
                                }
                            }}
                >
                    更新专辑信息
                </div>}
                okText={'提交'}
                cancelText={'取消'}
                visible={props.visible}    //是否显示

                onOk={async () => {
                    await uploadAlbumRef.current.validateFields().then(value=>{
                        console.log('-----upload_value-----',value)
                        const uploadObj={
                            // aid:1,
                            pro_data:value
                        }
                        axios.post('http://localhost:8089/program_api/addProgram',{datas:uploadObj}).then(result=>{
                            console.log('-------result',result)
                            props.closeUpload();
                            message.success(result.data.msg)
                        })
                    })
                }}

                onCancel={()=>{
                    props.closeUpload()
                }}

                modalRender={(modal)=>(
                    <Draggable disabled={disabled2} bounds={bounds2}
                               onStart={(event,uiData)=>{
                                   onStart(event,uiData)
                               }}
                    >
                        <div ref={draggableRef}>{modal}</div>
                    </Draggable>
                )}
            >
                <Form
                    ref={uploadAlbumRef}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16}}
                >
                    <Form.Item
                        label={'专辑名称'}
                        name={'aname'}
                    >
                        <Select
                            onClick={getAlbumName}
                            placeholder={'请选择专辑'}
                        >
                            {uploadAlbum.map(album=>(
                                <Option key={album.a_name}>{album.a_name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={'节目名称'}
                        name={'proname'}
                    >
                        <Input></Input>
                    </Form.Item>
                    <Form.Item
                        label={'上传节目'}
                        name={'p_rogram'}
                    >
                        <Input type={"file"}></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}


function UploadAlbum(){
    const [uploadAlbum,setUploadAlbum] = useState(false) //决定‘上传节目’的窗口的打开和关闭

    const openUploadAlbum = () =>{   //打开上传节目窗口——————管理专辑的点击函数
        setUploadAlbum(true) //窗口打开
    }

    //关闭上传节目窗口
    const closeUploadAlbum = () => {
        setUploadAlbum(false)
    }

    return (
        <>
            <UploadAlbumModal visible={uploadAlbum} closeUpload={closeUploadAlbum}/>

            <div className={'contentbox'}>
                <div style={{textAlign:'right'}}>
                    <span className={'uploadWord'}>没有专辑？</span>
                    <Button type={'primary'} size={'large'} style={{width:'150px',borderRadius:'10px'}} icon={<AppstoreAddOutlined />}>
                        <NavLink to={'/createAlbum'}><span style={{color:'white'}}>&nbsp;&nbsp;新建专辑</span></NavLink>
                    </Button>
                </div>
                <div style={{margin:'150px 10px 0 0'}}>
                    <Button type={'primary'} size={'large'} style={{width:'180px',height:'50px',borderRadius:'10px'}} icon={<CloudUploadOutlined />} onClick={openUploadAlbum}>上传音频</Button>
                </div>
                <br/>
                <div style={{width:'450px',margin:'0 auto',paddingBottom:'30px'}}>
                    <p className={'uploadWord'}>上传作品支持MP3、WAV格式，单个文件不超过300MB，一次最多可上传30个文件。
                        上传即表示您已同意
                        <a href="https://mp.kuwo.cn/agreement" target="_blank" className="blue" data-v-e7697b1e="">《TME播客创作中心服务协议》</a>
                        {/*<a href={'#'} target={'_blank'} >《TME播客创作中心服务协议》</a>*/}
                    </p>
                </div>
                <div className={'instruction'}>
                    <div className={'uploadWord'}>
                        说明
                        <br/>
                        1. 严禁上传违规/色情色诱/低俗等内容，违者将被下架并封号处理。
                        <br/>
                        2. 为保证节目质量，上传作品均需要审核通过后发布，审核最长时间为3天。
                        <br/>
                        3. 专辑和节目上线后，如需修改可以编辑信息或删除。
                        <br/>
                        4.为保证音频的音质请上传64kbps以上的音频。
                        <br/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default UploadAlbum;