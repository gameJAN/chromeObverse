import { lazyReportBatch } from "../report"

export default function observerLoad (){
    window.addEventListener('pageShow',function(event){
        requestAnimationFrame(()=>{
            ['load'].forEach((type)=>{
                const reportData = {
                    type:'performance',
                    subtType:type,
                    pageUrl:window.location.href,
                    startTime:performance.now() -event.timeStamp
                }
                lazyReportBatch(reportData)
            })
        })
    })
}