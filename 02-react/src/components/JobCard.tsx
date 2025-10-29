import { useState, type FC, type ReactNode } from 'react';

interface JobCardProps { idJob: string; children?: ReactNode; isEnableButton?: boolean; }
interface TitleProps { title?: string; }
interface CompanyProps { company?: string; }
interface LocationProps { location?: string; }
interface DescriptionProps { description?: string; }
interface ApplyButtonProps { isApplied: boolean; onClick: () => void }

type JobCardType = FC<JobCardProps> & {
    Title: FC<TitleProps>;
    Company: FC<CompanyProps>;
    Location: FC<LocationProps>;
    Description: FC<DescriptionProps>;
    ApplyButton: FC<ApplyButtonProps>;
};

export const JobCard: JobCardType = (({ idJob, children, isEnableButton = true }) => {
    const [isApplied, setIsApplied] = useState(false);

    const handleApply = () => {
        setIsApplied(!isApplied);
    };

    return (
        <article key={idJob} className='job-listing-card'>
            <div>
                {children}
            </div>
            {isEnableButton && <JobCard.ApplyButton onClick={handleApply} isApplied />}
        </article>
    );
}) as JobCardType;

JobCard.Title = ({ title = "Título" }: TitleProps) => {
    return <h3>{title}</h3>;
};

JobCard.Company = ({ company = "Empresa" }: CompanyProps) => {
    return <small>{company}</small>;
};

JobCard.Location = ({ location = "Ubicación" }: LocationProps) => {
    return <small> - {location}</small>;
}

JobCard.Description = ({ description = "Descripción" }: DescriptionProps) => {
    return <p>{description}</p>;
};

JobCard.ApplyButton = ({ onClick }: ApplyButtonProps) => {
    const [isApplied, setIsApplied] = useState(false);

    const handleClick = () => {
        setIsApplied(!isApplied);
        onClick?.();
    };

    const buttonText = isApplied ? 'Aplicado' : 'Aplicar'
    const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'


    return (
        <button className={buttonClasses} onClick={handleClick}>
            {buttonText}
        </button>
    );
};