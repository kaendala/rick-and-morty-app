import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import s from './App.module.scss';
function App() {
  return (
    <div className={s.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
