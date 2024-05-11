import React, { useState } from 'react';
import Header from '../component/Header.js';
import Sidebar from '../component/Sidebar.js'
import MainContent from '../component/MainContent.js';
import '../css/HomePage.css';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部活动');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home">
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

export default HomePage;
