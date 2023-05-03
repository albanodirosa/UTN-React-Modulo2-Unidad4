import {Link} from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/alta">Registro</Link></li>
      <li><Link to="/ingreso">Login</Link></li>
      <li><Link to="/detalle">Detalle</Link></li>
    </ul>
  );
}

export default NavBar;