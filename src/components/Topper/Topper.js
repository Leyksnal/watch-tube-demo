import React from 'react'
import styled from 'styled-components'

export default function Topper({top}) {
  return (
    <Container>
        <Wrapper>
            <span>{top}</span>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    margin: 10px;
    margin-left: 20px;
`;


const Wrapper = styled.div`
    border-radius: 20px;
    height: 35px;
    background-color: #4D4D4D;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    transition: all 500ms;
    

    span{
        font-size: 1.2rem;
        font-weight: 700;
        color: #fff;
        margin: 20px;
    }

    :hover{
        background-color: grey;
        cursor: pointer;
    }
`;