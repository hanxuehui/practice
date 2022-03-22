/*节流就是每个一段时间执行一次*/

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
/*防抖就是n秒触发回调函数，在n秒内再次触发时间需要重新计算*/

function debounce(func, initval) {
  let startTime = new Date();
  let timed = null;
  return function(event) {
    event.persist && event.persist();
    let currenttime = new Date();
    clearTimeout(timed);
    if (startTime - currenttime <= initval) {
      timed = setTimeout({func(event)}, initval);
    } else {
      startTime = currenttime;
      func(event);
    }
  };
}
