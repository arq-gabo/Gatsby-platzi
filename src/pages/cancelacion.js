import React from 'react'
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelacion() {
    return (
        <div>
            <SEO title="Compra Cancelada" />
            <Purchase>
                <h2>Compra Cancelada</h2>
                <p>No pudimos procesar la compra de tu Swap</p>
                <p>Te Esperamos de Vuelta!!!</p>
                <span rol="img" aria-label="emoji">❤</span>
                <Link to="/">
                    <Button>Volver al Catálogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}
