import { useEffect, useState } from 'react';

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Search error:", err);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h2>🔍 Search Results for: {query}</h2>
      {loading ? (
        <p>Loading results...</p>
      ) : results.length > 0 ? (
        results.map((item, i) => (
          <div key={i}>
            <img src={item.thumbnail} alt={item.title} width="150" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
