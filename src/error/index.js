import { lazyReportBatch } from "../report"

export default function error(){
    // 捕获资源加载失败的错误 ： js css
    window.addEventListener('error',function(e){
        const target = e.target
        // 不存在肯定为JS错误
        if( !target){
            return
        }
        if(target.src || target.href){
            const url = target.src || target.href
            const reportData = {
                type:'error',
                subType:'resource',
                url,
                html:target.outerHTML,
                pageUrl:window.location.href,
                paths:e.path
            }
            //todo 发送错误信息
            lazyReportBatch(reportData)
        }

    },true)
    // 捕获js
    window.onerror = function(msg,url,lineNo,columnNo,error){
        const reportData = {
            type:'error',
            subType:'js',
            url,
            lineNo,
            columnNo,
            msg,
            stack:error.stack,
            pageUrl:window.location.href,
            startTime:performance.now()
        }
        lazyReportBatch(reportData)
        //todo 发送错误信息
    }
    // 捕获promise错误
    window.addEventListener('unhandledrejection',function(e){
        const reportData = {
            type:'error',
            subType:'promise',
            msg:e.reason?.stack,
            pageUrl:this.window.location.href,
            startTime:performance.now()
        }
        //todo 发送错误信息
        lazyReportBatch(reportData)
    },true)
}