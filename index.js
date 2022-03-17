// var arr=[1,2,3,4,5,6]
// arr.forEach((item,index)=>{
//    item+=1
// })
// console.log(arr)


// let arr=[1,2,3,4,5,6]
// arr.map((item,index)=>{
//      item+=1
//      return item
// })
// console.log(arr)
// let arr =[{"a":1,name:"han"},{"a":3,name:"hananan"}]
// arr.map(item=>{
//     item.c=item.a
//     return item
// })
// console.log(arr)

// var arr= [1,10,20,30]
// var brr = arr.filter((item)=>{
//    if(item>10){
//        return item
//    };
// })
// console.log(brr)
let arr =[{"a":1,name:"han"},{"a":3,name:"hananan"}]
let a=arr.filter(item=>{
   if(item.name=='han'){
      return item
   }
    
})
console.log(a)