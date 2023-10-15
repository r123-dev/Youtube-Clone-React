import React,{useState,useEffect} from 'react'
import { VIDEO_API_URL } from '../Constants/constants';
import VideoCard from './videoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setVideos]=useState([]);

  const fetchVideos = async () =>{
     const data=await fetch(VIDEO_API_URL);
     const json=await data.json();
     setVideos(json.items);
  }

  useEffect(()=>{
     fetchVideos();
  },[])

  return (
    <div className="flex flex-wrap">
       {
          videos.map((video,index)=>{
            return <Link to={"/watch?v="+video?.id} state={{...video}}><VideoCard key={index} info={video}/></Link>
          })
       }
    </div>
  )
}

export default VideoContainer