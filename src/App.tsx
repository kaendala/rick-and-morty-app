import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import s from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';
function App() {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
