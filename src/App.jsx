import { useState } from 'react'
import Header from './components/Header'




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
   </div>
  )
}

export default App
