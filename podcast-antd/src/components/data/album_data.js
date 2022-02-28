import React, {createRef, useEffect, useState} from 'react';
import '../css/album_data.css'
import axios from "axios";
import * as echars from 'echarts';
import ReactEchars from 'echarts-for-react';
import {Button, DatePicker, Menu, Dropdown, Table, Input, Select} from 'antd';    //日期选择
import locale from "antd/lib/date-picker/locale/zh_CN";
import 'moment/locale/zh-cn';
import { DownOutlined } from '@ant-design/icons';
const {RangePicker} = DatePicker;
// const {Column}=Table
const {Option} = Select;
// const selectRef=createRef();

function AlbumData(){
    const [albumData,setAlbumData] = useState([]);
    const [albumInfo,setAlbumInfo] = useState([]);
    const [sel,setSel] = useState('请选择专辑')
    const [code,setCode] = useState(0)

    useEffect(() => {
        getAlbums();
        // getSel()
        getAlbumData();
    },[code])

    //查专辑的图片和名字
    const getAlbums = () => {
        axios.get('http://localhost:8089/api/findAlbum').then(result => {
            console.log('专辑数据页：',result.data.datas)
            // setCode(result.data.code)
            const albumInfo =  setAlbumInfo(result.data.datas)
        })
    }

    const onSelChange = (value,e) => {
        // console.log('------------------------',value,e)
        // console.log('===========',e.children[0].props.children)
        // setSel(value)
        setSel(e.children[0].props.children)         //获取到的Select下拉框的a_id值
        // console.log('-----------------------',value)
        // getAlbumData()
    }
    // console.log('sel',sel)
    // const getSel = (sel) => {
    //     return sel
    // }
    // const aInfo = new Array(albumInfo.length).fill(0).map(() => new Array());
    // console.log(aInfo)
    // // const pictures=[]
    // let i=0
    // albumInfo.forEach(info => {
    //     aInfo[i].push(info.a_id)
    //     aInfo[i].push(info.a_picture)
    //     aInfo[i].push(info.a_name)
    //     i++
    // })
    // console.log('aInfo',aInfo)


    //每个专辑的数据
    const getAlbumData = () =>{
        axios.get('http://localhost:8089/data_api/showAlbumData',{params:{aid:sel,uid:1}}).then(result => {
            console.log('------------------专辑数据------------------',result.data.datas)
            // console.log('请求sel',sel)
            // console.log('-----------------------------------------------------',selectRef.value.a_id)
            setCode(result.data.code)
            const albumData = setAlbumData(result.data.datas)
        })
    }
    console.log('专辑数据：',albumData)    //得到的总体数据（多条，是一个数组）
    var total_amount=0
    var total_subscribe=0
    var total_time=0
    var total_rate=0
    albumData.forEach(val => {       //遍历数组
        total_amount+=val.d_amount;   //一个用户的播放量相加
        total_subscribe+=val.d_subscribe;  //一个用户的订阅数相加
        total_time+=val.d_time;  //一个用户的播放时长相加
        total_rate+=val.d_rate;   //一个用户的完播量相加
    })



    //折线图
    const getLine1Option = () => {
        const line1Option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:3000
            },
            series: [
                {
                    data: [3000, 3000, 3000, 3000, 3000, 3000, 3000],
                    type: 'line',
                    areaStyle: {color:`rgb(203, 241, 210)`},
                    // lineStyle:{color:'rgb(117,243,140)'}
                    color:`rgb(117,243,140)`,
                }
            ]
        }
        return line1Option
    }

    return (
        <div className={'albumdata_content'}>
            {/*搜索*/}
            <div className={'block1'}>
                <Select size={'large'} placeholder={'请选择专辑'} style={{ width: '800px'}} bordered={false} onChange={onSelChange}>
                    {/*<Option value='1'>请选择专辑查看数据！<DownOutlined /></Option>*/}
                    {albumInfo.map(info => (
                        <Option value={info.a_name}>
                            <div className={'table1'}>
                                {info.a_id}
                            </div>
                            <div className={'table1'}>
                                {info.a_picture}
                            </div>
                            <div className={'table1'}>
                                {info.a_name}
                            </div>
                        </Option>
                    ))}
                    {/*    /!*{aInfo.map(info => (*!/*/}
                    {/*    /!*    <Option value={info}>*!/*/}
                    {/*    /!*        <div className={'table1'}>*!/*/}
                    {/*    /!*            {info[0]}*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*        <div className={'table1'}>*!/*/}
                    {/*    /!*            {info[1]}*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*        <div className={'table1'}>*!/*/}
                    {/*    /!*            {info[2]}*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*    </Option>*!/*/}
                    {/*    /!*))}*!/*/}
                </Select>
            </div>
            {/*播放量：*/}
            <div className={'block2'}>
                <div className={'block2-4box'} style={{marginRight:'20px'}}>
                    <div className={'block2-4box-box1'}>
                        <img src="https://h5static.kuwo.cn/www/ugc/img/data1.994e1e4.png" width={'40px'}></img>
                        <p className={'word0'}>播放量</p>
                        <p className={'word1'}>{total_amount}</p>
                    </div>
                    <div className={'block2-4box-box2'}>
                        <div className={'box2-left'}>
                            <p>昨日</p>
                            <p>较前一日</p>
                        </div>
                        <div className={'box2-right'}>
                            <p>0</p>
                            <p>100.00%</p>
                        </div>
                    </div>
                </div>
                <div className={'block2-4box'} style={{marginRight:'20px'}}>
                    <div className={'block2-4box-box1'}>
                        <img src="https://h5static.kuwo.cn/www/ugc/img/data2.0be9128.png" width={'40px'}></img>
                        <p className={'word0'}>订阅数</p>
                        <p className={'word1'}>{total_subscribe}</p>
                    </div>
                    <div className={'block2-4box-box2'}>
                        <div className={'box2-left'}>
                            <p>昨日</p>
                            <p>较前一日</p>
                        </div>
                        <div className={'box2-right'}>
                            <p>0</p>
                            <p>100.00%</p>
                        </div>
                    </div>
                </div>
                <div className={'block2-4box'} style={{marginRight:'20px'}}>
                    <div className={'block2-4box-box1'}>
                        <img src="https://h5static.kuwo.cn/www/ugc/img/data5.bcedb33.png" width={'40px'}></img>
                        <p className={'word0'}>播放时长/分钟</p>
                        <p className={'word1'}>{total_time}</p>
                    </div>
                    <div className={'block2-4box-box2'}>
                        <div className={'box2-left'}>
                            <p>昨日</p>
                            <p>较前一日</p>
                        </div>
                        <div className={'box2-right'}>
                            <p>0</p>
                            <p>100.00%</p>
                        </div>
                    </div>
                </div>
                <div className={'block2-4box'}>
                    <div className={'block2-4box-box1'}>
                        <img src="https://h5static.kuwo.cn/www/ugc/img/data4.13ecc1b.png" width={'40px'}></img>
                        <p className={'word0'}>完播率</p>
                        <p className={'word1'}>{total_rate*100}%</p>
                    </div>
                    <div className={'block2-4box-box2'}>
                        <div className={'box2-left'}>
                            <p>昨日</p>
                            <p>较前一日</p>
                        </div>
                        <div className={'box2-right'}>
                            <p>0</p>
                            <p>100.00%</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*echars图表*/}
            <div className={'block3'}>
                <div className={'block3-4box'}>
                    <p className={'word2'}>播放量</p>
                    <span>选择时间段：</span>
                    <RangePicker locale={locale}/>
                    <div className={'time-btn'}>
                        <Button>近7天</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>近30天</Button>
                    </div>
                    <div className={'echarts'}>
                        <ReactEchars
                            option={getLine1Option()}
                            style={{margin:'auto',height:'360px'}}
                        />
                    </div>
                </div>
                <div className={'block3-4box'}>
                    <p className={'word2'}>订阅量</p>
                    <span>选择时间段：</span>
                    <RangePicker locale={locale}/>
                    <div className={'time-btn'}>
                        <Button>近7天</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>近30天</Button>
                    </div>
                    <div className={'echarts'}>
                        <ReactEchars
                            option={getLine1Option()}
                            style={{margin:'auto',height:'360px'}}
                        />
                    </div>
                </div>
                <div className={'block3-4box'}>
                    <p className={'word2'}>播放时长/分钟</p>
                    <span>选择时间段：</span>
                    <RangePicker locale={locale}/>
                    <div className={'time-btn'}>
                        <Button>近7天</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>近30天</Button>
                    </div>
                    <div className={'echarts'}>
                        <ReactEchars
                            option={getLine1Option()}
                            style={{margin:'auto',height:'360px'}}
                        />
                    </div>
                </div>
                <div className={'block3-4box'}>
                    <p className={'word2'}>完播率</p>
                    <span>选择时间段：</span>
                    <RangePicker locale={locale}/>
                    <div className={'time-btn'}>
                        <Button>近7天</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>近30天</Button>
                    </div>
                    <div className={'echarts'}>
                        <ReactEchars
                            option={getLine1Option()}
                            style={{margin:'auto',height:'360px'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AlbumData;