import React, { useState } from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.tsx'
import MainContent from './MainContent.tsx';
import './index.css'; 

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部活动');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <MainContent category={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
