import { useState, useEffect } from 'react';
import './SearchResult.css'
const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=YOUR_API_KEY&maxResults=10`)
      .then(res => res.json())
      .then(data => {
        setResults(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="search-results">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="results-list">
          {results.map(result => (
            <div key={result.id.videoId} className="video-item">
              <img src={result.snippet.thumbnails.high.url} alt={result.snippet.title} />
              <div>
                <h3>{result.snippet.title}</h3>
                <p>{result.snippet.channelTitle}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
