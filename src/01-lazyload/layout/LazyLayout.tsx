import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import {LazyPage1, LazyPage2, LazyPage3} from '../pages';

export const lazylayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            <ul>
                <li>
                    <NavLink to="Lazy1">Lazzy 1</NavLink>
                </li>
                <li>
                    <NavLink to="Lazy2">Lazzy 2</NavLink>
                </li>
                <li>
                    <NavLink to="Lazy3">Lazzy 3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='lazy1' element={<LazyPage1/>}/>
                <Route path='lazy2' element={<LazyPage2/>}/>
                <Route path='lazy3' element={<LazyPage3/>}/>

                <Route path="*" element={<Navigate replace to="Lazy1" />}/>
            </Routes>
        </div>
    )
}


export default lazylayout
