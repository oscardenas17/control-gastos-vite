import {useState} from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = (  {presupuesto, setPresupuesto} ) => {

    const [mensaje, setMensaje] = useState("");


    {/* funcion para validar solo # */}
    const handlePresupuesto = (e) =>{
        e.preventDefault();

        if( !Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje("No es un presupuesto  válido")
        }else{
            setMensaje("Si es un presupuesto  válido")
        }
    }


  return (
    <div className="contenedor-presupuesto contenedor sombra">   
      
      <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label > Definir Presupuesto</label>
                <input 
                    type="text"
                    className="nuevo-presupuesto"
                    placeholder="Añade tu presupuesto"
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}
                 />
            </div>

            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error"> {mensaje}</Mensaje>
            }
      </form>
    </div>
  )
};

export default NuevoPresupuesto;
