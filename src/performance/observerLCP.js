import { lazyReportBatch } from "../report";

export default function observerLCP(){
    const entrtyHandler = (list) =>{
        if(observer){
            observer.disconnect()
        }
        for  (const entry of list.getEntries()) {

            const json = entry.toJSON()
            console.log(json);
            const reportData = {
                ...json,
                type:"performance",
                subType:entry.name,
                pageUrl:window.location.href
            }
            lazyReportBatch(reportData)
            
        }
    }
    // 统计和计算fp的事件
    const observer = new PerformanceObserver(entrtyHandler);
    //buffered true 确保观察到所有paint事件
    observer.observe({type:'largest-contentful-paint',buffered:true})
}