import React from 'react'

const VideoCard = ({info}) => {


  function abbreviateNumber(number){
     var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    var tier = Math.log10(Math.abs(number)) / 3 | 0;
    if(tier == 0) return number;
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    return scaled.toFixed(1) + suffix;
  }
  const {snippet,statistics}=info||{};
  const {thumbnails}=snippet||{};
  return (
    <div className=" w-96 rounded-lg shadow-lg p-2 m-1">
        <img src={thumbnails?.medium?.url} className="rounded-lg w-full" alt="thumbnails"/>
        <div className="flex flex-col justify-start">
          <p className="font-bold text-start text-black">{snippet?.title}</p>
          <p className="text-start text-sm text-gray-700">{snippet?.channelTitle}</p>
          <p className="text-start text-sm text-gray-700">{abbreviateNumber(statistics?.viewCount)} views</p>
        </div>
       </div>
  )
}

export default VideoCard;