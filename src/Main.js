import React, { useState } from 'react'
import "./Main.css"

const Main = () => {
    const maintext=0;
    const [text,settext]=useState(maintext);
    document.title=`Chats(${text})`
    return (
    <>
    <div className='container'>
    <div className='text-container'>
    <span className='text'>
        {text}
    </span>
    </div>
    <span>{text}</span>
       <div className='btn-container'>
        <button onClick={()=>{settext(text+1)}}>Click to Increase</button>
        <button onClick={()=>{text > 0 ? settext(text-1) : settext(0)}}>Click to Decrease</button>
       </div>
    </div>
    </>
  )
}

export default Main