import React from 'react'

const RecommendVideo = ({item}) => {

    console.log(item);
    function abbreviateNumber(number){
        var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
        if(tier == 0) return number;
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
        var scaled = number / scale;
        return scaled.toFixed(1) + suffix;
    }

    function convertTitle(title){
        if(title.length<=100)
        return title;
        else{
            return title.slice(0,100)+"...";
        }
    }


  return (
    <div className="flex w-full gap-3 px-2 py-1">
        <img src={item?.snippet?.thumbnails?.medium?.url} className="rounded-lg w-2/5" alt='thmbnail' />
        <div className="flex flex-col">
          <p className=" font-semibold text-start text-sm text-black">{convertTitle(item?.snippet?.title)}</p>
          <p className="text-start text-sm text-gray-700">{item?.snippet?.channelTitle}</p>
          <p className="text-start text-sm text-gray-700">{abbreviateNumber(item?.statistics?.viewCount)} views</p>
        </div>
    </div>
  )
}

export default RecommendVideo