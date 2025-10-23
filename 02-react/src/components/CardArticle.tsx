import type { FC, ReactNode } from "react";

interface ImageProps { children?: ReactNode; }
interface TitleProps { title?: ReactNode; }
interface DescriptionProps { description?: ReactNode; }
interface ArticleProps { children: ReactNode; }

type CardArticleType = FC<ArticleProps> & {
    Image: FC<ImageProps>;
    Title: FC<TitleProps>;
    Description: FC<DescriptionProps>;
};

export const CardArticle: CardArticleType = (({ children }) => {
    return <article>{children}</article>;
}) as CardArticleType;

CardArticle.Image = ({ children }) => {
    return <div>{children}</div>;
};

CardArticle.Title = ({ title = "Título" }) => {
    return <h3>{title}</h3>;
};

CardArticle.Description = ({ description = "Descripción" }) => {
    return <p>{description}</p>;
};