import React,{useState} from "react";
import {Modal, message, Form, Input, Select, Upload} from 'antd';
import {createRef} from "react";
import axios from "axios";
import Draggable from "react-draggable";
// import UploadPicture from "./UploadPicture";   //模态框可以移动的模块
import '../css/uploadAlbum.css';
const {Option} = Select;   //选择控件

export default function UpdateAlbum(props){
    console.log(props.editRecord)

    //--------------------设置Modal消息框可以移动---------------------
    const [disabled1,setDisabled1]=useState(true)   //用来控制Modal是否可以移动，初始状态为不可移动
    const [bounds1,setBounds1]=useState({left:0,top:0,bottom:0,right:0})         //用来控制对话框拖拽的范围
    const draggableRef=React.createRef()   //和可以拖拽组件Draggable进行绑定
    const onStart=(event,uiData)=>{
        //浏览器的窗口的高度和宽度
        const {clientWidth,clientHeight}=window.document.documentElement;    //解构赋值获取浏览器窗口的宽度和高度
        const targetReact=draggableRef.current.getBoundingClientRect();     //获取窗口中显示的包含Modal的div
        setBounds1({
            bounds:{
                left:-targetReact.left+uiData.x,
                right:clientWidth-(targetReact.right-uiData.x),
                top:-targetReact.top+uiData.y,
                bottom:(targetReact.bottom-uiData.y)
            }
        })
    }

    const updateAlbumRef=createRef();

    return (
        <>
            <Modal
                title={<div style={{
                    width:'100%',
                    cursor:'move'
                }}
                            onMouseMove={()=>{
                                if(disabled1){
                                    setDisabled1(false)
                                }
                            }}
                >
                    更新专辑信息
                </div>}
                okText={'提交'}
                cancelText={'取消'}
                visible={props.visible}    //是否显示
                onOk={async ()=>{
                    await updateAlbumRef.current.validateFields().then(value=>{
                        if(value.astate=='连载中'){
                            value.astate=0
                        }else if(value.astate=='已完结'){
                            value.astate=1
                        }
                        console.log('---------',value)
                        const updateObj={
                            aid:props.editRecord.a_id,
                            updateData:value
                        }
                        axios.put('http://localhost:8089/api/updateAlbum',{updateA:updateObj}).then(result=>{
                            props.closeModal();
                            message.success(result.data.msg)
                            // console.log(result.data.code)
                            // props.setCode(result.data.code)
                        })
                    })
                }}
                onCancel={()=>{   //用户点击关闭按钮，或取消按钮
                    props.closeModal()
                }}
                destroyOnClose   //窗口关闭时，里面的内容释放掉,配合preserve={false}，实现表单重新打开时初始化

                modalRender={(modal)=>(
                    <Draggable disabled={disabled1} bounds={bounds1}
                               onStart={(event,uiData)=>{
                                   onStart(event,uiData)
                               }}
                    >
                        <div ref={draggableRef}>{modal}</div>
                    </Draggable>
                )}
            >
                <Form
                    ref={updateAlbumRef}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16}}

                >
                    <Form.Item
                        label={'专辑图片'}
                        name={'apicture'}
                        initialValue={props.editRecord.a_picture}
                        // rules={[{
                        //     required:true，
                        // }]}
                    >
                        {/*<UploadPicture/>*/}
                    </Form.Item>
                    <Form.Item
                        label={'专辑名称'}
                        name={'aname'}
                        initialValue={props.editRecord.a_name}
                        rules={[{           //进行表单验证
                            required:true,      //表示是必须要填的
                            message:'请输入专辑名称！'
                        }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label={'更新状态'}
                        name={'astate'}
                        initialValue={props.editRecord.a_state}
                        rules={[{           //进行表单验证
                            required:true,      //表示是必须要填的
                            message:'请输入更新状态！'
                        }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label={'分类'}
                        name={'aclassify'}
                        initialValue={props.editRecord.a_classify}
                        rules={[{           //进行表单验证
                            required:true,      //表示是必须要填的
                            message:'请选择分类！'
                        }]}
                    >
                        <Select>
                            <Option key={'儿童'}>儿童</Option>
                            <Option key={'有声小说'}>有声小说</Option>
                            <Option key={'畅销书'}>畅销书</Option>
                            <Option key={'教育'}>教育</Option>
                            <Option key={'相声评书'}>相声评书</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={'审核状态'}
                        name={'amanage'}
                        initialValue={props.editRecord.a_manage}
                    >
                        <Input disabled={true}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}