//import qs from 'qs'
/* eslint-disable */ 
import service from '@/api/request.js'
import moment from 'moment'
import _ from 'underscore'

let base = '/v1/api/domi/tables/';

export const getTableList = params => {
    let tableName = params.tableName
    let filter = params.filter||'';
    let select = params.select||'*';
    if(params.orderby){
        return service.get(base + tableName+'/?select='+ select +'&&filter='+filter+'&&skip='+params.skip+'&&top='+params.top+'&&orderby='+params.orderby);     
    }else{
        return service.get(base + tableName+'/?select='+ select +'&&filter='+filter+'&&skip='+params.skip+'&&top='+params.top);             
    }
    
}
export const updateTable = params => {
    let tableName = params.tableName
    let filter = params.filter||'';
    let data = params.data;
    return service({
        url: base + tableName+'/?filter='+filter,
        method: 'put',
        data: data 
    })
}
export const addTable = params => {
    let tableName = params.tableName
    let output = params.output||'';
    let data = params.data;
    return service({
        url: base + tableName+'/?output='+output,
        method: 'post',
        data: data 
      })
}
export const delTable = params => {
    let tableName = params.tableName;
    let batch = params.batch||0;
    let data = params.data;
    return service({
        url: base + tableName +'?batch='+batch,
        method: 'delete',
        data: data 
      })
}
export const Login = params => {
    return service({
        url:'/users/login',
        method: 'post',
        data: { 
            user: params.username,
            pass: params.password
        }
    })
}

export const getAttendsList = (params) => {
    let time1 = '',time2= ''
    if(params.brushdate1){
        time1 = moment(params.brushdate1).format('YYYY-MM-DD')
    }
    if(params.brushdate1){
        time2 = moment(params.brushdate2).format('YYYY-MM-DD')
    }    

    return service({
        url:'/attends/',
        method: 'post',
        data: { 
            manno: params.manno,
            brushdateS: time1,
            brushdateE: time2
        }
    })    
}

//刷卡紀錄查詢
export const getListRecords = params => { 
    return service.get('/records/deer/'+params.manno +'/'+params.time1 + '/' + params.time2); 
}

//門禁紀錄查詢
export const getListDoors = params => { 
    return service.get('/doors/'+params.manno 
    + '/' + params.time1 
    + '/' + params.time2
    ); 
}

//加班單待審清單
export const getListWaitingOvertime =  params => {
    return service.get('/overtimelist/waitinglist'
    + '/' + params.time1 
    + '/' + params.time2    
    )
}