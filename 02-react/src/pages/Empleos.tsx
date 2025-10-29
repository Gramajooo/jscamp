
import { useState } from 'react';
import { JobCard } from '../components/JobCard';
import { Searchbar } from '../components/Searchbar';
import empleos from '../data/empleos.json';
import experiencia from '../data/experiencia.json';
import tecnologias from '../data/tecnologias.json';
import ubicaciones from '../data/ubicaciones.json';

export const Empleos = () => {


  const [empleosFiltered, setEmpleosFiltered] = useState(empleos);


  const handleFilterSearch = (value: string) => {
    const listEmpleos = empleos.filter(emp =>
      emp.titulo.toLowerCase().includes(value.toLowerCase()) ||
      emp.empresa.toLowerCase().includes(value.toLowerCase()) ||
      emp.ubicacion.toLowerCase().includes(value.toLowerCase()) ||
      emp.descripcion.toLowerCase().includes(value.toLowerCase())
    );
    setEmpleosFiltered(listEmpleos);
  }
  
  return <>
    <main>
      <section className="jobs-search">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>


        <form id="empleos-search-form" role="search">

          <Searchbar classStyle='search-bar' placeholder='Buscar trabajos, empresas o habilidades' onChangeSearch={handleFilterSearch} />

          <div className="search-filters">
            <select name="technology" id="filter-technology">
              <option value="">Tecnología</option>
              {tecnologias.map((tech) => (
                <option key={tech.value} value={tech.value}>
                  {tech.label}
                </option>
              ))}
            </select>

            <select name="location" id="filter-location">
              <option value="">Ubicación</option>
              {ubicaciones.map((ubicacion) => (
                <option key={ubicacion.value} value={ubicacion.value}>
                  {ubicacion.label}
                </option>
              ))}
            </select>

            <select name="experience-level" id="filter-experience-level">
              <option value="">Nivel de experiencia</option>
              {experiencia.map((nivel) => (
                <option key={nivel.value} value={nivel.value}>
                  {nivel.label}
                </option>
              ))}
            </select>
          </div>
        </form>

        <span id="filter-selected-value"></span>
      </section>

      <section>
        <h2>Resultados de búsqueda</h2>

        <div className="jobs-listings">
          {empleosFiltered.map((empleo) => (
            <JobCard
              key={empleo.id}
              idJob={empleo.id}
            >
              <JobCard.Title title={empleo.titulo} />
              <JobCard.Company company={empleo.empresa} />
              <JobCard.Location location={empleo.ubicacion} />
              <JobCard.Description description={empleo.descripcion} />
            </JobCard>
          ))}
        </div>

        <nav className="pagination">
          <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg></a>
          <a className="is-active" href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg></a>
        </nav>
      </section>
    </main>
  </>;
};