import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";

function Detalle() {
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const [producto,setProducto] = useState({})
  console.log("🚀 ~ file: Detalle.jsx:9 ~ Detalle ~ params:", id)
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getById(id)
          console.log("🚀 ~ file: Productos.jsx:15 ~ request ~ response:", response)
          setProducto(response)
          setLoading(false)
        }catch(e){
          console.log(e)
        }
      }

      request()
    },
    [id]
  )

  const [aviso, setAviso] = useState("")

  const handleClick = ()=>{
    setAviso("Gracias por su compra"); 
  }
  
  if(loading) {
    return (
      <div>
        Cargando...
      </div>
    );
  } else {
    return (
      <div>
        <h1>{producto.title}</h1>
          <p>${producto.price}</p>
          <button onClick={handleClick}>Comprar</button>
          <p>{aviso}</p>
        </div>
    );
  }
}

export default Detalle;