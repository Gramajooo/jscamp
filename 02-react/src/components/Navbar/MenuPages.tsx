import { Link } from 'react-router-dom';

export const MenuPages = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/empleos">Empleos</Link>
      <Link to="/empresas">Empresas</Link>
      <Link to="/salarios">Salarios</Link>
    </nav>
  );
};