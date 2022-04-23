import { useEffect, useState, useContext, useCallback } from 'react';
import { mesasContext } from '../pages/Mesas';
export interface FiltroMesaProps {
    libre: boolean;
    ocupada: boolean;
    enEspera: boolean;
}


export const FiltroMesa = () => {

    
    const [ocupada, setOcupada] = useState(false);
    const [libre, setLibre] = useState(false);
    const [enEspera, setEnEspera] = useState(false);
    
    const handleOcupadas = useCallback(() => {
        setOcupada(!ocupada);
    }, [ocupada]);

return (
    <>
        <fieldset className="form-group">
            <legend className="mt-4">Ver solo</legend>
                <div className="form-check">
                <input className="form-check-input" type="checkbox"  checked={libre} />
                <label className="form-check-label" htmlFor="libre">
                    Libres
                </label>
                </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={handleOcupadas} checked={ocupada} id="ocupada" />
                <label className="form-check-label" htmlFor="ocupada">
                    Ocupadas
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"  checked={enEspera} id="pedidos" />
                <label className="form-check-label" htmlFor="pedidos">
                    Pedidos
                </label>
            </div>
        </fieldset>
    </>
)
}
