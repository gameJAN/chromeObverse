import { lazyReportBatch } from "../report"

export default function observerEntries(){
    if(document.readyState === 'complete'){
        observerEvent()
    }else{
        const onLoad = ()=>{
            observerEvent()
            window.removeEventListener('load',onLoad,true)
        }
        window.addEventListener('load',onLoad,true)
    }
}

export function observerEvent(){
    const entrtyHandler = (list)=>{
        const data = list.getEntries()
        for (const entry of data) {
            if(observer){
                observer.disconnect()
            }
            const reportData = {
                name:entry.name,        //资源名称
                type:'performance',     //类型
                subType:entry.entryType, //类型
                sourceType:entry.initiatorType,     //资源类型
                duration:entry.duration,            //加载事件
                dns:entry.domainLookupEnd - entry.domainLookupStart,    //dns加载时间
                tcp:entry.connectEnd - entry.connectStart,              //tcp链接时间
                redirect:entry.redirectEnd - entry.redirectStart ,       //重定向时间
                ttfb:entry.responseStart,                         //服务器响应时间
                protocol:entry.nextHopProtocol,                         //请求协议
                responseBodySize:entry.encodedBodySize,                  //响应内容大小
                resourceSize:entry.decodedBodySize,                      //资源解压后大小
                transferSize:entry.transferSize,                        //请求内容大小
                responseHeaderSize:entry.transferSize - entry.encodedBodySize,  //响应头部大小
                startTime:performance.now()
            }
            lazyReportBatch(reportData)
            console.log(entry);
        }
    }
    const observer = new PerformanceObserver(entrtyHandler);
    //buffered true 确保观察到所有paint事件
    observer.observe({type:['resource'],buffered:true})
}