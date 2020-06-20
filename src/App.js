import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from "../src/components/Header"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
