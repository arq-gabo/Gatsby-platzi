import React from 'react'
import { StyledJumbo } from "../styles/components";
import { Image } from "./"

export default function Jumbo({description}) {
    return (
        <StyledJumbo>
            <div>
                <h2>!Consigue el mejor swap exclisivo y especial de Gabo</h2>
                <small>{description}</small>
            </div>
            <Image name="icon"/>
        </StyledJumbo>
    )
}
