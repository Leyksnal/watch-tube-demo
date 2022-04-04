import React from 'react'
import styled from 'styled-components'
// import {IoLibraryOutline} from 'react-icons/io'
// import {MdSubscriptions} from 'react-icons/md'
// import {CgShortcut} from 'react-icons/cg'
// import {MdExplore} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'

export default function Sidebar() {
  return (
    <Container>
        <Wrapper>
            <AiFillHome size={'25px'}/>
            <span>Home</span>
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