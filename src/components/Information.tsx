import React from "react";
import { Chemical } from "../types/chemical";

type InformationProps = {
    target: Chemical,
    descriptionParagraphs: string[],
}
export const Information = (
    {
        target,
        descriptionParagraphs
    } : InformationProps
): React.ReactElement<InformationProps> => {
    return (
    <div>
        <span><h3>{target.name}</h3><pre>{target.fullChemicalFormula}</pre></span>
        {
        descriptionParagraphs.map((value) => {
            return <p>{value}</p>
            })
        }
    </div>)
}