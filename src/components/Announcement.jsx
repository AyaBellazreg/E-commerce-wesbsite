import styled from 'styled-components'

const Container = styled.div`
    background-color:#702222;
    height:30px;
    color:white;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size:14px;
`

export default function Announcement() {
  return (
    <Container>
        Free Shipping on orders over 70$
    </Container>
  )
}
