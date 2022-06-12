import { Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
    height: 60px;
    ${mobile({height:'20%'})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    ${mobile({display: "block"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    ${mobile({justifyContent: "center"})}
`
const Right = styled.div`
    flex: 1;
    display flex;
    justify-content: flex-end;
    align-items:center;
    ${mobile({justifyContent: "center"})}
`
const Center = styled.div`
    flex:1;
    display:flex;
    justify-content: center;
    align-items:center;
`
const Language = styled.div`
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    padding: 10px 15px;
    margin-left:20px;
    display: flex;
`
const Input = styled.input`
    border:none;
    outline:none;
`
const Logo = styled.div`
    cursor:pointer;
    font-weight: bold;
    font-size: 26px;
    text-align:center;
`
const MenuItem = styled.div`
    font-size:16px;
    cursor:pointer;
    margin-right:30px;
`
export default function Navbar() {
  return (
    <Container>
       <Wrapper>
           <Left>
               <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
           </Left>
           <Center>
               <Logo>SHOP.</Logo>
           </Center>
           <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
           </Right>
       </Wrapper>
    </Container>
  )
}
