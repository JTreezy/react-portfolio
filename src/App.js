import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './app.scss';

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('About');

  return (
    <div className = "sections">
      <Header
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      />
      <Main selectedNavItem={selectedNavItem} />
      <Footer/>
    </div>
  );
}

export default App;