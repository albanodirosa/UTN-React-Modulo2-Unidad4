import {Link} from "react-router-dom";

function Producto({id,nombre,precio,categoria}){
  
    return (
      <div>
        <h1>{nombre}</h1>
        <p>{precio}</p>
        <p>{categoria}</p>
        <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
      </div>
    );
  }
  
  export default Producto;
  