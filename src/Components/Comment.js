import React from 'react'
import likeIcon from '../Images/like-icon.png'
import dislikeIcon from '../Images/dislike-icon.png'

const Comment = ({comment}) => {

    function convertTitle(title){
        if(title.length<=300)
        return title;
        else{
            return title.slice(0,300)+"...";
        }
    }
  return (
  <div className="flex flex-col my-5">
    <div className="flex gap-2">
      <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}  className="w-8 h-8 rounded-full" alt='channel-icon' />
       <div className="flex flex-col items-start">
        <p className="font-semibold">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
        <p dangerouslySetInnerHTML={{__html:convertTitle(comment?.snippet?.topLevelComment?.snippet?.textDisplay)}} className="text-start"></p>
       </div>
    </div>
    <div className="flex gap-2 py-1 px-3 ms-7">
        <img src={likeIcon}  className=" w-6 h-6"alt='like-icon'/>
        <p className="text-[14px]" >{comment?.snippet?.topLevelComment?.snippet?.likeCount}</p>
        <img src={dislikeIcon}  className="w-6 h-6" alt='dislike-con'/>
        <p className="ms-4 font-semibold text-[6p]">Reply</p>
      </div>
  </div>
  )
}

export default Comment