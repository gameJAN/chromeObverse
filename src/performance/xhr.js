export const originalProto = XMLHttpRequest.prototype
export const originalSend = originalProto.send;
export const originalOpen = originalProto.open;
function overwriteOpenAndSend(){
    originalProto.open =  function newOpen(...args){
        this.url = args[1]
        this.method = args[0]
        originalOpen.apply(this,args)
    }
    originalProto.send = function newSend(...args){
        this.startTime = Date.now()
        const onLoaded = ()=>{
            this.endTime = Date.now()
            this.duration =    this.endTime - this.startTime
            const {url,method ,startTime ,endTime,duration,status} = this;
            const reportData = {
                url,method:method.toUpperCase() ,startTime ,endTime,duration,status,
                type:'performance',
                subType:'xhr',
                success:status >=200 && status<300
            }
            this.removeEventListener('loadend',onLoaded,true)
        }
        this.addEventListener('loadend',onLoaded,true)
        originalSend.apply(this,args)
    }
}
export default function xhr () {
    overwriteOpenAndSend()
}