import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { VIDEO_COMMENT_API } from '../Constants/constants'

const CommentsList = ({id}) => {
  
  const [comments,setComments]=useState([]);
  const fetchComments= async ()=>{
    const data=await fetch(VIDEO_COMMENT_API+id);
    const json=await data.json();
    setComments(json.items);
  }

  useEffect(()=>{
     fetchComments();
  },[])

  return (
    <>
    
    {
       comments.map((comment,i)=>{
        return <Comment key={i} comment={comment}/>
       })
    }

    </>
    
  )
}

export default CommentsList