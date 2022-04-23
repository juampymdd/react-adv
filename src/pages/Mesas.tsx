import React, { createContext, useContext } from 'react'
import { Mesa, MesaProps } from '../componets/Mesa'
import mesas from '../database/mesas.json'
import { useState } from 'react';
import { FiltroMesa } from '../componets/FiltroMesa';

export const mesasContext = createContext(mesas)
const { Provider } = mesasContext

export const Mesas = () => {
  const [customMesas, setcustomMesas] = useState([...mesas])
  

  return (
    <Provider value={
      customMesas 
    }>
      <div className='container-fluid mt-5' >
        <div className="row justify-content-arround">
          <div className="col-2">
            <FiltroMesa />
          </div>
          <div className="col-10">
            <div className="row">
              {customMesas.map(({id, estado, sillas})=>(
                <Mesa key={id} title={`Mesa ${id}`} estado={estado} sillas={sillas}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </Provider>
  )
}
