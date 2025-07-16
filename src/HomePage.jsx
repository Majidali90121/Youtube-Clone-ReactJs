import { useState, useEffect } from 'react';
import VideoList from './components/VideoList';
import { fetchPopularVideos } from './utils/api';
import './Home.css'
const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchPopularVideos(page)
      .then(newVideos => {
        setVideos(prev => [...prev, ...newVideos]);
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="page">
      <h2 className="page-title">Recommended Videos</h2>
      <VideoList videos={videos} />
      {loading && <p>Loading more...</p>}
      <button onClick={loadMore} className="load-more-button">Load More</button>
    </div>
  );
};

export default Home;
