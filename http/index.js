/*
节流：每隔一段时间执行一次
*/ 
function throttle(func, initval) {
  let timer = null;
  return function(event) {
    event.persist && event.persist();
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, args);
    }, initval);
  };
}

/*
防抖：n秒触发回调函数，如果n秒内再次触发回调函数则会重新计算时间
*/ 

function debounce(func,initval){
  let timer=null
  let startTime=new Date()
  return function (event){
    event.persist&&event.persist()
    let currentTime=new Date()
    clearTimeout(timer)
    if(startTime-currentTime<=initval){
      timer=setTimeout(()=>{func(event)},initval)
    }else{
     startTime=currentTime
      func(event)
    }
  }
}