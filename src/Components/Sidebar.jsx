import './Sidebar.css'

function Sidebar({ sidebaropen, setCurrentPage, currentPage }) {
  const menuItems = [
    { name: "Home", emoji: "🏠", page: 'Home' },
    { name: "Subscriptions", emoji: "📺", page: 'Subscriptions' },
    { name: "Music", emoji: "🎵", page: 'Music' },
    { name: "Gaming", emoji: "🎮", page: 'Gaming' },
    { name: "Account", emoji: "👤", page: 'Account' },
  ];

  return (
    <div className={`sidebar ${sidebaropen ? 'open' : 'closed'}`}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`sidebar-item ${currentPage === item.page ? 'active' : ''}`}
          onClick={() => setCurrentPage(item.page)} 
        >
          <span className='sidebar-icon'>{item.emoji}</span>
          {sidebaropen && <span className='sidebar-text'>{item.name}</span>}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
