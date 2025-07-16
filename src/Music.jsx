import { useEffect, useState } from 'react';
import VideoList from './Components/VideoList';
import { fetchPopularVideos } from './Utils/api';

const Music = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularVideos("music").then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="page">
      <h2 className="page-title">🎵 Music</h2>
      {loading ? <p>Loading...</p> : <VideoList videos={videos} />}
    </div>
  );
};

export default Music;
