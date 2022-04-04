import React from 'react'
import styled from 'styled-components'


export default function Sidebar({icon, title}) {
  return (
    <Container>
        <Wrapper>
            {icon}
            <span>{title}</span>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms;

    :hover{
        background-color: gray;
    }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;

    span{
        font-size: 0.8rem;
        margin-top: 8px;
    }
`;