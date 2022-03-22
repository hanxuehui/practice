class Promise{
    constructor(fn){
        // 三个状态
        this.status=padding
        this.resolve=undefined
        this.reject=undefined
        let resolve=(value)=>{
            if(this.status==="padding"){
                this.status='resolve'
                this.resolve=value
            }
        }
        let reject=(value)=>{
            if(this.status==='padding'){
                this.status='reject'
                this.reject=value
            }
        }
        try{
            fn(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onResolved,onRejected){
         switch(this.status){
             case 'resolved':onResolved(this.resolve);break;
             case 'rejected':onRejected(this.resolve);break;
             default:
         }
    }
}
