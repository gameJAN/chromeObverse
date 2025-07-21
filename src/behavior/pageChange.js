import { lazyReportBatch } from "../report";
import {generateUniqueId} from "../utils";

export default function pageChnage(){
    // hash histroy
    let oldUrl=''
    window.addEventListener('hashchange',function(event){
        console.log(this.location.hash);
        const newUrl = event.newURL
        const reportData = {
            form:oldUrl,
            to:newUrl,
            type:'behavior',
            subType:'hashchange',
            startTime:this.performance.now(),
            uuid:generateUniqueId()
        }
        lazyReportBatch(reportData)
        oldUrl = newUrl
    },true)

    let from=''
    window.addEventListener('postate',function(event){
        const to = this.window.location.href
        const reportData = {
            form:from,
            to:to,
            type:'behavior',
            subType:'hashchange',
            startTime:this.performance.now(),
            uuid:generateUniqueId()
        }
        lazyReportBatch(reportData)
        from = to
    },true)
}
