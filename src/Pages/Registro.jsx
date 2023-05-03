import { useForm } from "react-hook-form";

function Registro() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({ mode: 'onChange' });
  
  const onSubmit = (data)=>{
    console.log(data);
  };

  return (
    <div> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input 
            type="text" 
            {...register("nombre", { required: true })}
          />
        </div>
        {errors.nombre && (
          <div>
            <span>El campo es obligatorio</span>
          </div>
        )}
        <div>
          <label>Apellido</label>
          <input 
            type="text" 
            {...register("apellido")}
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <div>
            <span>El campo es obligatorio</span>
          </div>
        )}
        <div>
          <label>Contraseña</label>
          <input 
            type="password" 
            {...register("password", { 
              required: true,
              minLength: 6,
              maxLength: 12,
             })}
          />
        </div>
        {errors.password && (
          <div>
            {errors.password?.type === "required" && <span>El campo es obligatorio</span>}
            {errors.password?.type === "minLength" && <span>El mínimo es de 6 caracteres</span>}
            {errors.password?.type === "maxLength" && <span>El máximo es de 12 caracteres</span>}
          </div>
        )}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
  
export default Registro;