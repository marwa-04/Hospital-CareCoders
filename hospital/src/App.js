import React from 'react';
import TeamSection from './components/Team/TeamSection';

import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div>

      <TeamSection />
      <Footer/>
    </div>
  );
}

export default App;
