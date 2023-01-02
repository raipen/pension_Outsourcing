import Main from './pages/Main';
import Notice from './pages/about/Notice';
import View from './pages/about/View';
import Directions from './pages/about/Directions';
import Room from './pages/Room';
import Service from './pages/Service';
import { removeMenu } from './components/Header';
import { Routes, Route } from 'react-router-dom';

const RouteArticles = () => {
    return (
        <article onClick={removeMenu}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about/notice" element={<Notice />} />
                <Route path="/about/view" element={<View />} />
                <Route path="/about/directions" element={<Directions />} />
                <Route path="/room" element={<Room />} />
                <Route path="/service" element={<Service />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </article>
    );
}

export default RouteArticles;