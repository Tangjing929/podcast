//数据-->总体概览
import {DatePicker, Space, Button, Form} from 'antd';
import '../css/total_data.css'
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import axios from "axios";
import {useEffect, useState,useCallback} from "react";
import ReactEcharts from 'echarts-for-react';
import moment from "moment";

const { RangePicker } = DatePicker;

export default function Total(){
    const yesterday=new Date()-1000*60*60*24;
    const sevenDay=yesterday-1000*60*60*24*7;
    const yesterDate=moment(yesterday).format('YYYY-MM-DD');
    const sevenDate=moment(sevenDay).format('YYYY-MM-DD');

    const [total,setTotal]=useState([]);
    const [code,setCode]=useState(0);
    const [date,setDate]=useState([sevenDate,yesterDate]);

    //获取总体数据
    const getTotal=()=>{
        axios.get('http://localhost:8089/api/showData',{params:{did:1}}).then(result=>{
            console.log(result.data);
            setTotal(result.data);
        })
    }

    //创建折线图的函数
    const getLine1Option = () => {
        const line1Option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: [date[0], date[1], date[2], date[3], date[4], date[5],date[6] ]
                data:[...date]
            },
            yAxis: {
                type: 'value',
                min:0,
                max:3000
            },
            series: [
                {
                    // data: [3000, 3000, 3000, 3000, 3000, 3000, 3000],
                    data: randArray(date.length,0,3000),
                    type: 'line',
                    areaStyle: {color:`rgb(203, 241, 210)`},
                    // lineStyle:{color:'rgb(117,243,140)'}
                    color:`rgb(117,243,140)`,
                }
            ]
        }
        return line1Option
    }
    //生成动态数组
    function randArray(len, min, max) {
        return Array.from({length:len}, v=> Math.floor(Math.random()*(max-min))+min);
    }


    const clickTime1=()=>{
        console.log(date);
        console.log(sevenDate)
        getdiffdate(sevenDate,yesterDate)
        // setDate([moment(sevenDate,'YYYY-MM-DD'),moment(yesterDate,'YYYY-MM-DD')])
        console.log(date)
    }
    const clickTime2=()=>{
        const thirtyDay=yesterday-1000*60*60*24*30;
        const thirtyDate=moment(thirtyDay).format('YYYY-MM-DD');
        getdiffdate(thirtyDate,yesterDate)
    }

    //当总体数据改变时
    useEffect(()=>{
        getTotal();
    },[code]);

    const onChange=(value,dateString)=>{
        console.log('dateString:',dateString)
        getdiffdate(dateString[0],dateString[1])
    }

    //获取两日期之间日期列表函数
    function getdiffdate(stime,etime){
        console.log(stime,etime)
        //初始化日期列表，数组
        var diffdate = new Array();
        var i=0;

        var s=new Date(stime).getTime();
        var e=new Date(etime).getTime();
        console.log('时间戳范围：'+(e-s));
        //开始日期小于等于结束日期,并循环
        while(stime<=etime){
            diffdate[i] = stime;

            //获取开始日期时间戳
            var stime_ts = new Date(stime).getTime();

            //增加一天时间戳后的日期
            var next_date = stime_ts + (24*60*60*1000);

            //拼接年月日，这里的月份会返回（0-11），所以要+1
            var next_dates_y = new Date(next_date).getFullYear()+'-';
            var next_dates_m = (new Date(next_date).getMonth()+1 < 10)?'0'+(new Date(next_date).getMonth()+1)+'-':(new Date(next_date).getMonth()+1)+'-';
            var next_dates_d = (new Date(next_date).getDate() < 10)?'0'+new Date(next_date).getDate():new Date(next_date).getDate();

            stime = next_dates_y+next_dates_m+next_dates_d;

            //增加数组key
            i++;
        }
        console.log(diffdate);
        setDate(diffdate);
        console.log(date)
    }
    // getdiffdate(sevenDate,yesterDate)

    return(
        <div className="album-data">
            <div className="menu">
                <div className="menu-item" style={{width: '200px'}}>
                    <img src="https://h5static.kuwo.cn/www/ugc/img/data1.994e1e4.png" alt=""/>
                    <div className="msg">
                        播放量
                    </div>
                    <div className="num" >{total.d_amount}</div>
                    <div className="item-list">
                        <div>昨日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近7日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近30日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                </div>
                <div className="menu-item" style={{width: '200px'}}>
                    <img src="https://h5static.kuwo.cn/www/ugc/img/data2.0be9128.png" alt=""/>
                    <div className="msg">
                        订阅数
                    </div>
                    <div className="num">{total.d_subscribe}</div>
                    <div className="item-list">
                        <div>昨日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近7日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近30日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                </div>
                <div className="menu-item" style={{width: '200px'}}>
                    <img src="https://h5static.kuwo.cn/www/ugc/img/data5.bcedb33.png" alt=""/>
                    <div className="msg">
                        播放时长/播放数
                    </div>
                    <div className="num">{total.d_time}</div>
                    <div className="item-list">
                        <div>昨日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近7日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近30日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                </div>
                <div className="menu-item" style={{width: '200px'}}>
                    <img src="https://h5static.kuwo.cn/www/ugc/img/data4.13ecc1b.png" alt=""/>
                    <div className="msg">
                        完播率
                    </div>
                    <div className="num">{total.d_rate}%</div>
                    <div className="item-list">
                        <div>昨日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近7日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                    <div className="item-list">
                        <div>近30日</div>
                        <div className="item-list-num">
                            <i className="icon red ivu-icon ivu-icon-md-arrow-dropup"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="title">播放量</div>
                <div className="time">
                    选择时间段：
                    <Space direction="vertical" size={12} >
                        <RangePicker
                            locale={locale}
                            showToday={true}
                            onChange={onChange}
                            value={[moment(date[0],'YYYY-MM-DD'),moment(date[date.length-1],'YYYY-MM-DD')]}
                        />
                    </Space>

                    <button type="button" className="btn ivu-btn ivu-btn-default" onClick={clickTime1} >
                        <span>近7天</span>
                    </button>
                    <button type="button" className="btn ivu-btn ivu-btn-default" onClick={clickTime2}>
                        <span>近30天</span>
                    </button>
                </div>
                <div id="echarts" className="echarts" style={{width:'1000px'}}>
                    <ReactEcharts
                        option={getLine1Option()}
                        className={'react_for_echarts'}
                    />
                    <div className="loading">
                        <div className="l-main">
                            <div  className="l-item"></div>
                            <div  className="l-item"></div>
                            <div  className="l-item"></div>
                            <div  className="l-item"></div>
                            <div  className="l-item"></div>
                        </div>
                        {/*<div className="l-text">loading...</div>*/}
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="title">订阅量</div>
                <div className="time">
                    选择时间段：
                    <Space direction="vertical" size={12}>
                        <RangePicker locale={locale} />
                    </Space>
                    <button type="button" className="btn ivu-btn ivu-btn-default" >
                        <span>近7天</span>
                    </button>
                    <button type="button" className="btn ivu-btn ivu-btn-default" >
                        <span>近30天</span>
                    </button>
                </div>
            </div>
            <div className="map">
                <div className="title">播放时长/分钟</div>
                <div className="time">
                    选择时间段：
                    <Space direction="vertical" size={12}>
                        <RangePicker locale={locale} />
                    </Space>
                    <button type="button" className="btn ivu-btn ivu-btn-default" >
                        <span>近7天</span>
                    </button>
                    <button type="button" className="btn ivu-btn ivu-btn-default" >
                        <span>近30天</span>
                    </button>
                </div>
            </div>
            <div className="map">
                <div className="title">完播率</div>
                <div className="time">
                    选择时间段：
                    <Space direction="vertical" size={12}>
                        <RangePicker locale={locale} />
                    </Space>
                    <button type="button" className="btn ivu-btn ivu-btn-default" >
                        <span>近7天</span>
                    </button>
                    <button type="button" className="btn ivu-btn ivu-btn-default" >
                        <span>近30天</span>
                    </button>
                </div>
            </div>
            <div className="nodata" style={{background: 'rgb(255, 255, 255)'}}>
                <img src="https://h5static.kuwo.cn/www/ugc/img/nodata.c5fe324.png" alt="" className="pic" />
                <div className="msg" >专辑不在线或没有数据</div>
                <button>
                    查看专辑列表
                </button>
            </div>
        </div>
    )
}
