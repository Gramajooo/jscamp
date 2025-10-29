import { Empleos, Empresas, Salarios, Home } from '../../pages';
import { Routes, Route } from 'react-router-dom';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empleos" element={<Empleos />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/salarios" element={<Salarios />} />
            <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
    )
}
