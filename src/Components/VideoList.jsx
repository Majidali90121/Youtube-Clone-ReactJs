import React from 'react';
import './VideoList.css'

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div className="video-card" key={video.id}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className="video-thumbnail"
          />
          <div className="video-info">
            <h3 className="video-title">{video.title}</h3>
            <p className="video-channel">Channel: {video.channel}</p>
            <p className="video-stats">
              {video.view} views • {video.uploadTime}
            </p>
            <p className="video-duration">Duration: {video.duration}</p>
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-link"
            >
              ▶️ Watch Video
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
