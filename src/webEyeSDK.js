import performance from "./performance/index"
import behavior from "./behavior/index"
import error from './error/index'
import { setConfig } from "./config"
import { lazyReportBatch } from "./report"
window.__webEyeSDK__ = {
    version:"0.0.1"
}
// 针对vue项目
export function install (Vue,options){
    if(__webEyeSDK__.vue){
        return
    }
    __webEyeSDK__.vue = true
    setConfig(options)
    const handler= Vue.config.errorHandler
    Vue.config.errorHandler = function(err,vm,info){
        const reportData = {
            info,
            error:err?.stack,
            subType:'vue',
            type:'error',
            startTime:window.performance.now(),
            pageURL:window.location.href
        }
        lazyReportBatch(reportData)
        // 收集上报错误信息
        if(handler){
            handler.call(this, err ,vm ,info);
        }
    }
}

// 针对react项目
export function errorBoundary(err,info){
    if(__webEyeSDK__.react)return;
    __webEyeSDK__.react = true
    const reportData = {
        info,
        error:err?.stack,
        subType:'react',
        type:'error',
        startTime:window.performance.now(),
        pageURL:window.location.href
    }
    lazyReportBatch(reportData)
}

export function init(options){
    setConfig(options)
    // error()
    // performance()
    behavior()
}
export default{
    install,
    errorBoundary,
    performance,
    behavior,
    error,
    init
}