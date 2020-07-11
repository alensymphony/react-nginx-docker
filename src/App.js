import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="dashboard">
        <h1>Ovo je proba Fargate Pipeline</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
