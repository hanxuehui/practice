// import React from 'react'
// import MyContext from '../component'
// import Child from './child';
// class MyClass extends React.Component {
//   componentDidMount() {
//         state={
//           user:{
//             permalink:'/list/index',
//             avatarSize:12
//           }
//         }
//   }

//   render() {
//     const {user}=this.state
//     const userLink = (
//       <Link href={user.permalink}>
//         <Avatar user={user} size={props.avatarSize} />
//       </Link>
//     );
//     console.log(userLink)
//     return(<Child userLink={userLink}/>)
//   }
// }
// MyClass.contextType = MyContext;
import React,{useContext, useState} from "react";
import Son from "./son"
import MyContext from '../component/index'

const MyClass=()=>{
const handleOk=()=>{
  console.log(111)
}
let obj={
  title:"韩雪慧你一定可以",
  handleOk:handleOk
}
const [arr,setArr]=useState(obj)
    return <MyContext.Provider value={arr}>
         <Son/>
    </MyContext.Provider>
}
export default MyClass
