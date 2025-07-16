import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './HomePage';
import Game from './Game';
import Music from './Music'
import Account from './Account';
import Subscriptions from './Subscriptions';
import SearchResults from './SearchResult'; 
import './App.css';

function App(){
  const [sidebaropen, setSidebaropen] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage('Search');
  };

  return(
    <div className='app-container'>
      <Navbar setSidebarOpen={setSidebaropen} onSearch={handleSearch} />
      <div className="main-content">
        <Sidebar 
          sidebaropen={sidebaropen} 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
        />
        <div className="content-area">
          {currentPage === 'Home' && <Home />}
          {currentPage === 'Subscriptions' && <Subscriptions />}
          {currentPage === 'Account' && <Account />}
          {currentPage === 'Gaming' && <Game/>}
          {currentPage === 'Music'  && <Music/>}
          {currentPage === 'Search' && <SearchResults query={searchQuery} />}
        </div>
      </div>
    </div>
  );
}

export default App;
