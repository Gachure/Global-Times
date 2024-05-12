import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import LatestNews from './components/LatestNews';
import AddNews from './components/AddNews';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latest" element={<LatestNews />} />
      <Route path="/add" element={<AddNews />} />
    </Routes>
  </div>
);


export default App;
