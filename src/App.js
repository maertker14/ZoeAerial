import './App.css';
import React from 'react'
import UnlockableContent from './components/unlockableContent';
import AppHeader from './components/appHeader';
import NftCards from './components/nftCards';
import ContactForm from './components/contactForm';
import AppFooter from './components/appFooter';



function App() {

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-container-2">
          <AppHeader />
          <NftCards />
          <UnlockableContent />
          <ContactForm />
          <AppFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
