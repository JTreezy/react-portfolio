import React, { useState } from 'react';

// Components.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('About');

  return (
    <div>
      <Header
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      />
      <Main selectedNavItem={selectedNavItem} />
      <Footer />
    </div>
  );
}

export default App;