import React from 'react'

const Button = ({text,active}) => {
    if(active===true){
       return(
        <button className="py-1 px-2 m-2 bg-black text-white rounded-lg">{text} </button>
       )
    }
  return (
    <button className="py-1 px-2 m-2 bg-gray-100 text-black rounded-lg">{text} </button>
  )
}

export default Button