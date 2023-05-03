import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import Detalle from './Pages/Detalle';
import NavBar from './Components/NavBar';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alta" element={<Registro />} />
        <Route path="/ingreso" element={<Login />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
