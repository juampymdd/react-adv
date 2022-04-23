import{ useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export interface MesaProps{
    id?: number,
    title: string;
    sillas: number;
    pedidos?: string;
    comensales?: string, 
    estado: string;//'ocupada' | 'libre' | 'pedido';
}

export const Mesa = ({title, estado, pedidos="Sin pedidos", sillas=0}:MesaProps) => {
    const [clase, setClase] = useState<string>()
    const card = useRef<HTMLDivElement>(null)
    const tipoMesa = () => {
        switch (estado) {
            case 'libre':
                setClase('primary');
                break;
            case 'ocupada':
                setClase('secondary');
                break;
            case 'pedido':
                setClase('warning')
                break
            default:
                setClase('warning')
                break;
        }
    }

    const hover = ()=>{
        const tl = gsap.timeline();

        tl.to(card.current,{ y: -10, duration: 0.2, ease: 'ease.out'})
        .to(card.current,{ y: 10, duration: 1, ease: 'bounce.out'})
    }
    useEffect(() => {

        tipoMesa()
    }, [estado])
    
    return (
    <div 
    onMouseEnter={()=>hover()}
    ref={card}
    className={`card text-white bg-${clase} m-3`} style={
        {
            maxWidth:   '20rem', 
            width:      '12rem', 
            height:     '12rem', 
            maxHeight:  '20rem', 
            minWidth:   '12em',
            minHeight:  '12rem'
        }
    }>
        <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-title">Sillas: {sillas}</h5>
        <p className="card-text">{pedidos}</p>
        </div>
    </div>
    )
}
