import { useState } from 'react';
import { JobListings } from '../components/JobListings';
import { Pagination } from '../components/Pagination/Pagination';
import { Searchbar } from '../components/Searchbar';
import { SearchFilters } from '../components/SearchFilters';
import empleos from '../data/empleos.json';

interface FilterValues {
  technology: string;
  location: string;
  experienceLevel: string;
}

interface Empleo {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  data: {
    technology: string[];
    modalidad: string;
    nivel: string;
  };
}

const RESULTS_FOR_PAGE = 5;

export const Empleos = () => {
  const [filters, setFilters] = useState<FilterValues>({
    technology: '',
    location: '',
    experienceLevel: ''
  });
  const [searchText, setSearchText] = useState<string>('');

  const [empleosFiltered, setEmpleosFiltered] = useState<Empleo[]>(empleos as Empleo[]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(empleosFiltered.length / RESULTS_FOR_PAGE);

  const getPageResults = (page: number): Empleo[] => {
    const start = (page - 1) * RESULTS_FOR_PAGE;
    const end = start + RESULTS_FOR_PAGE;
    return empleosFiltered.slice(start, end);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (): void => {
    let filteredEmpleos = empleos as Empleo[];

    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      filteredEmpleos = filteredEmpleos.filter((emp) =>
        emp.titulo.toLowerCase().includes(q) ||
        emp.empresa.toLowerCase().includes(q) ||
        emp.ubicacion.toLowerCase().includes(q) ||
        emp.descripcion.toLowerCase().includes(q)
      );
    }

    if (filters.technology || filters.location || filters.experienceLevel) {
      filteredEmpleos = filteredEmpleos.filter(empleo => {
        return (
          (filters.technology ? empleo.data.technology.includes(filters.technology) : true) &&
          (filters.location ? empleo.data.modalidad === filters.location : true) &&
          (filters.experienceLevel ? empleo.data.nivel === filters.experienceLevel : true)
        );
      });
    }

    setEmpleosFiltered(filteredEmpleos);
    setCurrentPage(1);
  };

  const handleTextSearch = (value: string): void => {
    setSearchText(value);
  };


  const handleFilterSearch = (newFilters: FilterValues): void => {
    setFilters(newFilters);
  };

  const currentResults = getPageResults(currentPage);

  return <main>
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form id="empleos-search-form" role="search">
        <Searchbar
          classStyle='search-bar'
          placeholder='Buscar trabajos, empresas o habilidades'
          onChangeSearch={handleTextSearch}
          onSearch={handleSearch}
        />
        <SearchFilters onSearch={handleFilterSearch} />
      </form>

      <span id="filter-selected-value"></span>
    </section>

    <section>
      <JobListings currentJobs={currentResults} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  </main>
};