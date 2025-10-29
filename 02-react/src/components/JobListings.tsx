import { JobCard } from "./JobCard";

export type Jobs = {
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

interface JobListingsProps {
    currentJobs: Jobs[];
}

export const JobListings = ({ currentJobs }: JobListingsProps) => {
    return (
        <>
            <div>
                <h2>Resultados de búsqueda</h2>
            </div>

            <div className="jobs-listings">
                {currentJobs.map((empleo) => (
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
        </>
    )
}
