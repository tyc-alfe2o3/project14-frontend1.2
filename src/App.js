import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from '../src/page/LoginPage';
import HomePage from '../src/page/HomePage';
import PersonalInfoPage from '../src/page/PersonalInfoPage';
import CommunicatePage from '../src/page/CommunicatePage';
import CalendarPage from '../src/page/CalendarPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/personal-info" element={<PersonalInfoPage/>} />
          <Route path="/communicate" element={<CommunicatePage/>} />
          <Route path="/calendar" element={<CalendarPage/>} />
        </Routes>
      </Router>
  );
};

export default App;

