import type { ChangeEvent } from 'react';
import { useId } from 'react';
import experiencia from '../data/experiencia.json';
import tecnologias from '../data/tecnologias.json';
import ubicaciones from '../data/ubicaciones.json';

interface SearchFiltersProps {
    onSearch: (filters: FilterValues) => void;
}

interface FilterOption {
    value: string;
    label: string;
}

interface FilterValues {
    technology: string;
    location: string;
    experienceLevel: string;
}

export const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
    const idTechnology = useId();
    const idLocation = useId();
    const idExperienceLevel = useId();

    const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget.form as HTMLFormElement);

        const filters: FilterValues = {
            technology: formData.get(idTechnology) as string,
            location: formData.get(idLocation) as string,
            experienceLevel: formData.get(idExperienceLevel) as string
        };
        console.log(filters);

        onSearch(filters);
    };

    return (
        <div className="search-filters">
            <select
                name={idTechnology}
                id="filter-technology"
                onChange={handleFilterChange}
            >
                <option value="">Tecnología</option>
                {(tecnologias as FilterOption[]).map((tech) => (
                    <option key={tech.value} value={tech.value}>
                        {tech.label}
                    </option>
                ))}
            </select>

            <select
                name={idLocation}
                id="filter-location"
                onChange={handleFilterChange}
            >
                <option value="">Ubicación</option>
                {(ubicaciones as FilterOption[]).map((ubicacion) => (
                    <option key={ubicacion.value} value={ubicacion.value}>
                        {ubicacion.label}
                    </option>
                ))}
            </select>

            <select
                name={idExperienceLevel}
                id="filter-experience-level"
                onChange={handleFilterChange}
            >
                <option value="">Nivel de experiencia</option>
                {(experiencia as FilterOption[]).map((nivel) => (
                    <option key={nivel.value} value={nivel.value}>
                        {nivel.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
