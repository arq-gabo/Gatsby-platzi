import React from 'react'
import {ProductDetail} from '../components'

export default function Products({pageContext}) {    
    return <ProductDetail {...pageContext} />
}
