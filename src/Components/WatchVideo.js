import React,{useState,useEffect} from 'react';
import { useLocation, useSearchParams,Link} from 'react-router-dom';
import { VIDEO_API_URL } from '../Constants/constants';
import likeIcon from '../Images/like-icon.png'
import dislikeIcon from '../Images/dislike-icon.png'
import shareIcon from '../Images/share-icon.png'
import downloadIcon from '../Images/download-icon.png'
import ProfileIcon from '../Images/profile-user.png'
import Comments from './CommentsList';
import VideoCard from './videoCard';
import RecommendVideo from './RecommendVideo';


const WatchVideo = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    let {state}=useLocation();
    const [videos,setVideos]=useState([]);

    function abbreviateNumber(number){
      var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
      var tier = Math.log10(Math.abs(number)) / 3 | 0;
      if(tier == 0) return number;
      var suffix = SI_SYMBOL[tier];
      var scale = Math.pow(10, tier * 3);
      var scaled = number / scale;
      return scaled.toFixed(1) + suffix;
    }

    const fetchVideos = async () =>{
       const data=await fetch(VIDEO_API_URL);
       const json=await data.json();
       setVideos(json.items);
    }

    useEffect(()=>{
      fetchVideos();
   },[])

  return (
    <div  className="flex w-full gap-2">
      <div id="left" className="w-4/6 ml-8">
        <iframe id="existing-iframe-example"
        height={600}
        src={"https://www.youtube.com/embed/"+searchParams.get('v')+"?autoplay=1&mute=1&enablejsapi=1"}
        frameborder="0"
        className="mt-2 w-full rounded-lg"
        allowFullScreen={true}
        title={searchParams.get('v')}
        onEnded={searchParams.get('v')}
        ></iframe>
        <h1 className="font-bold text-start my-3 text-lg">{state?.snippet?.title}</h1>
        <div className="flex justify-between">
            <div className="flex gap-3">
               <img src={ProfileIcon}  className="w-8 h-8" alt='channel-icon' />
               <div className="flex flex-col items-start">
                <h1 className="font-bold text-[15px] my-[-3px]">{state?.snippet?.channelTitle}</h1>
                <p className="text-[12px]">212k subscribers</p>
               </div>
               <button className="bg-black px-2 rounded-full text-white">Subscribe</button>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 py-1 bg-gray-100 rounded-full px-3">
                <img src={likeIcon}  className=" w-6 h-6"alt='like-icon'/>
                <p className="font-bold text-[14px]" >{abbreviateNumber(state?.statistics?.likeCount)}</p>
                <img src={dislikeIcon}  className="w-6 h-6" alt='dislike-con'/>
              </div>
              <div className="flex gap-2 py-1 bg-gray-100 rounded-full px-3 " >
                <img src={shareIcon} className=" w-5 h-5" alt='share-con'/>
                <p className="font-bold text-[14px]">Share</p>
              </div>
              <div className="flex gap-2 py-1 bg-gray-100 rounded-full px-3 " >
                <img src={downloadIcon}  className=" w-6 h-6" alt='download-con'/>
                <p className="font-bold text-[14px]">Download</p>
              </div>
            </div>
        </div>
        <div id="description" style={{whiteSpace: "pre-line"}} className="w-full bg-gray-100 rounded-lg my-2 text-start py-2 px-2" dangerouslySetInnerHTML={{__html:state?.snippet?.description}}>
           {/* {state?.snippet?.description} */}
           
        </div>
        <div className="flex  gap-3 my-2">
          <img src={ProfileIcon}  className="w-8 h-8" alt='channel-icon' />
          <div className="flex flex-col w-full">
            <input placeholder='Add a comment'  className="p-1"/>
            <hr></hr>
          </div>
        </div>
        <Comments id={searchParams.get('v')}/>
    </div>
    <div id="right" className=" w-1/3">
      <div className="flex flex-wrap">
        {/* <RecommendVideo item={state}/> */}
        {
            videos.map((video,index)=>{
              return <Link to={"/watch?v="+video.id} state={{...video}}><RecommendVideo key={index} item={video}/></Link>
            })
        }
      </div>
    </div>
    </div>
    
  )
}

export default WatchVideo