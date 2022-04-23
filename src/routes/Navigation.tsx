import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { Mesas } from "../pages/Mesas"
import logo from '../logo-sin-fondo.png'
import { Nav, Navbar,NavDropdown,Container } from "react-bootstrap"

export const Navigation = () => {
    const [colapse, setColapse] = useState(false)

    const clickColapse = ()=> {
        setColapse(!colapse)
    }

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" style={{width:'100px',height:'80px'}}/></a>
                    <button 
                        type="button" 
                        className="navbar-toggler" 
                        onClick={clickColapse} 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarColor03" 
                        aria-controls="navbarColor03" 
                        aria-expanded="true" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`navbar-collapse collapse ${colapse ? 'show': ''} justify-content-center`} id="navbarColor03">
                        <ul className="navbar-nav me-auto text-center">
                            <li className="nav-item">
                                <NavLink to="/mesas" className={ ({isActive})=> isActive ? 'active nav-link' : 'nav-link' }>Mesas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pedidos" className={ ({isActive})=> isActive ? 'active nav-link' : 'nav-link' }>Pedidos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mozos" className={ ({isActive})=> isActive ? 'active nav-link' : 'nav-link' }>Mozos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div>
                <Routes>
                    <Route path="mesas" element= {<Mesas/>}/>
                    <Route path="pedidos" element= {<h1>pedidos</h1>}/>
                    <Route path="mozos" element= {<h1>mozos</h1>}/>
                    <Route path="*" element ={<Navigate to="/mesas" replace/>}/>
                </Routes>
            </div>

            
        </BrowserRouter>
    )
}
