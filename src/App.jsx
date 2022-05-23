import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'




function App() {

  const [presupuesto, setPresupuesto]= useState(0)
  
  const [isValidPresupuesto, setisValidPresupuesto]= useState(false)

  return (
   <div>
    <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setisValidPresupuesto={setisValidPresupuesto}
    />

    {isValidPresupuesto && ( 
       <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto} alt="Icono nuevo Gasto" />
       </div>
       )}
  

   </div>
  )
}

export default App
