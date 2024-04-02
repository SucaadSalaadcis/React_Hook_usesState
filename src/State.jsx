import React, { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Hello")

    const handlePlus = () => {
        setCount(count+1);
    }
    const handleMinus = () => {
        if(count > 0){
            setCount(count-1);
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

  return (
    <div>
        <button onClick={handlePlus} className='bg-lime-400 rounded-md py-3 px-5 mt-10 ml-10'>+</button>
        <button onClick={handleMinus} className='bg-sky-400 rounded-md py-3 px-5 mt-10 ml-10'>-</button>
        <label className='ml-10 font-bold'> Count is : {count} </label>
        <input className='ml-10 ' type="text" value={text} name="" id="" onChange={handleChange} />
        <label className='ml-10 font-bold'>  {text} </label>
    </div>
  )
}

export default State