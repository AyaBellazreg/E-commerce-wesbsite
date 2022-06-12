import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export default function Categories() {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}
