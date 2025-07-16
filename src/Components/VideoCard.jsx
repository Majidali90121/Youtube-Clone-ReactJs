import './VideoCard.css'
function VideoCard({video}){
return(
   <div className='video-card'>
    <img src={video.thumbnail} alt={video.title} className='thumbnail'/>
    <div className='video-info'>
        <h4 className='video-title'>{video.title}</h4>
        <p className="video-channel">{video.channel}</p>
        <p className='video-stats'>{video.views} Views . {video.uploadTime}</p>
    </div>
   </div>

)
}
export default VideoCard