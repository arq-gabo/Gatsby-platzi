import React, { useContext, useEffect, useState } from 'react'
import { Link, useStaticQuery } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"


export default function Cart() {

    const { cart } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    const getTotal = () => {
        setTotal(
            cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
        )
    }

    useEffect(() => {
        getTotal()
    }, [])
    return (
        <StyledCart>
            <h2>Carrito de Compras</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidades</th>
                        <th>Total</th>
                    </tr>
                    {cart.map(swag => (
                        <tr key={swag.id}>
                            <td>
                                <img src={swag.metadata.img} alt={swag.name} /> {swag.name}
                            </td>
                            <td>
                                USD {priceFormat(swag.unit_amount)}
                            </td>
                            <td>
                                {swag.quantity}
                            </td>
                            <td>
                                {priceFormat(swag.quantity * swag.unit_amount)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <div>
                    <h3>Subtotal</h3>
                    <small>USD {priceFormat(total)}</small>
                </div>
                <div>
                    <Link to="/">
                        <Button type="outline">Volver</Button>
                    </Link>
                    <Button>Comprar</Button>
                </div>
            </nav>

        </StyledCart>
    )
}