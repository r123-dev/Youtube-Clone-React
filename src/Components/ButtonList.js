import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttons=["All","Taarak Mehta Ka Ooltah Chasma", "Drama","Comedy","Music","Thriller","Seminar","Mantra","Ritual","Bhajan","Lecture","API"];
  return (
    <div className="flex justify-start m-1">
      {
        buttons.map((button,index)=>{
          if(index===0)
          return <Button text={button} active={true}/>
          return <Button text={button}/>
        })
      }
    </div>
  )
}

export default ButtonList