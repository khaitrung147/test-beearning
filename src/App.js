import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import Bai1 from './components/bai1';
import Bai2 from './components/bai2';
import Bai3 from './components/bai3';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bai1' element={<Bai1 />} />
        <Route path='/bai2' element={<Bai2 />} />
        <Route path='/bai3' element={<Bai3 />} />
      </Routes>
    </Router>
  );
}

export default App;
