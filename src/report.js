import config from "./config";
import {generateUniqueId} from './utils'
import { addCache, clearCache, getCache } from "./cache";
export const originalProto = XMLHttpRequest.prototype
export const originalSend = originalProto.send;
export const originalOpen = originalProto.open;
export function isSupportSendBeacon(){
    return 'sendBeacon' in navigator
}

export function report (data){
    if(!config.url){
        console.error("请设置上传url地址");
    }
    const reportData = JSON.stringify({
        id:generateUniqueId(),
        data
    })
    if(config.isImageUpload){
        imgRequest(reportData)
    }else{
        if(window.navigator.sendBeacon) {return beaconRequest(reportData)}
        else{xhrRequest(reportData)}
        
    }
    // }
}

export function imgRequest(data){
    const img = new Image();
    img.src = `${config.url}?data=${encodeURIComponent(JSON.stringify(data))}`

}
// 普通ajax发送请求
export function xhrRequest(data){
   
    if(window.requestIdleCallback){
        window.requestIdleCallback(()=>{
            const xhr = new XMLHttpRequest()
            originalOpen.call(xhr,'post',config.url)
            originalSend.call(xhr,JSON.stringify(data))
        },{timeout:3000})
    }else{
        setTimeout(() => {
            const xhr = new XMLHttpRequest()
            originalOpen.call(xhr,'post',config.url)
            originalSend.call(xhr,JSON.stringify(data))
        });
    }
}
// becon发送请求


// const sendBeacon = isSupportSendBeacon()? navigator.sendBeacon: xhrRequest
export function beaconRequest(data){
    // let flg =true
    if(window.requestIdleCallback){
        window.requestIdleCallback(()=>{
            window.navigator.sendBeacon(config.url,data)
            // return  flg = sendBeacon(config.url,data)
        },{timeout:3000})
    }else{
        setTimeout(() => {
            window.navigator.sendBeacon(config.url,data)
            // return  flg = sendBeacon(config.url,data)
        });
    }
}

export function lazyReportBatch(data){
    // 定义缓存
    addCache(data)
    const dataCache =getCache()
    console.error('dataCache',dataCache);
    if(dataCache.length && dataCache.length > config.batchSize){
        report(dataCache)
        clearCache()
    }
}