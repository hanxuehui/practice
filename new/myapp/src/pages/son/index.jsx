import React,{useContext} from "react"
import MyContext from "../../component"
const Son =()=>{
    const {handleOk,title}=useContext(MyContext)
    
    return<div>
    {title}
    <div onClick={()=>handleOk()}>按钮</div>
    </div>
}
export default Son