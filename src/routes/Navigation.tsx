import { BrowserRouter as Router } from 'react-router-dom'

import {Navigate, NavLink, Route, Routes } from "react-router-dom"

import { Suspense } from 'react'
import { routes } from "./routes"
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> } >

            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {
                            routes.map(({to, name})=> (
                                <li key={to}>
                                    <NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({path, Component})=>(
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component/>}
                                />
                            ))
                        }
                        <Route path="/*" element ={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </Router>
        </Suspense>
    )
}
