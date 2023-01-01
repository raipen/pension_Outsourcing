import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route  } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Intro from './pages/about';
import Notice from './pages/about/Notice';
import View from './pages/about/View';
import Directions from './pages/about/Directions';
import Room from './pages/Room';
import Service from './pages/Service';
import Header,{removeMenu} from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <article onClick={removeMenu}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about/" element={<Intro />} />
          <Route path="/about/notice" element={<Notice />} />
          <Route path="/about/view" element={<View />} />
          <Route path="/about/directions" element={<Directions />} />
          <Route path="/room" element={<Room />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </article>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
