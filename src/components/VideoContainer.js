import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videosRes = await fetch(YOUTUBE_VIDEOS_API);
    const videosResJson = await videosRes.json();
    // console.log("videosResJson items ", videosResJson.items);
    setVideos(videosResJson.items);
  }

  // if (!videos.length) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='flex flex-wrap'>
      {videos.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div >
  )
}

export default VideoContainer;
