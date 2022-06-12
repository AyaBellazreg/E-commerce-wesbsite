import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
export default function Products() {
  return (
    <Container>
        {popularProducts.map(product=>(
            <Product product={product} key={product.id}/>
        ))}
    </Container>
  )
}
