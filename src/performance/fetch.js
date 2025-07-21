import { lazyReportBatch } from "../report";

const orginalFetch = window.fetch;
function overwriteFetch(){
    window.fetch = function newFetch(url,config){
        // console.log('fetch',...args);
        const startTime = Date.now()
        const reportData = {
            type:'performance',
            subType:'fetch',
            url,
            startTime,
            method:config.method
        }
        return originalFetch(url,config).then(res=>{
            const endTime = Date.now()
            reportData.endTime = endTime
            reportData.durattion = endTime - startTime
            const data = res.clone();
            reportData.status = data.status;
            reportData.success = data.ok;
            lazyReportBatch(reportData)
        }).catch(err=>{
            const endTime = Date.now()
            reportData.endTime = endTime
            reportData.durattion = endTime - startTime
            reportData.status = 0;
            reportData.success = false;
            lazyReportBatch(reportData)
        })
    }
}
export default function fetch(){
    overwriteFetch()
}