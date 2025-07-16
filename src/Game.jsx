import { useEffect, useState } from 'react';
import VideoList from './components/VideoList';
import { fetchPopularVideos } from './utils/api';

const Gaming = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPopularVideos()
      .then((data) => {
        setVideos(data.slice(10, 15)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching gaming videos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h2 className="page-title">🎮 Gaming</h2>
      {loading ? (
        <div className="loading">Loading gaming videos...</div>
      ) : (
        <VideoList videos={videos} />
      )}
    </div>
  );
};

export default Gaming;
