import { useState, useEffect } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Buscador from "./Buscador";

function Productos() {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState('Listado de Productos')
  const [buscar, setBuscar] = useState('ipod');

  useEffect (
    ()=>{
      const request = async ()=>{
        try{
          const response = await getAllProductos(buscar)
          console.log("🚀 ~ file: Productos.jsx:25 ~ request ~ response:", response.results)
          setProductos(response.results)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
      }

      request();
    },
    [buscar]
  )    
  
  const handleChange = (event)=>{
    const value = event.target.value;
    console.log("🚀 ~ file: Productos.jsx:31 ~ handleChange ~ value:", value);
    setBuscar(value);
  }

  if(loading){
    return(
      <div>Cargando...</div>
    )
  }else{
    return(
      <div>
        <h1>{titulo}</h1>
        <Buscador buscar={buscar} handleChange={handleChange} />
        {productos.map((producto) =>
          <Producto 
            id={producto.id}
            nombre={producto.title}
            precio={producto.price}
            categoria=""
          />
        )}
      </div>
    )
  }
}

export default Productos;