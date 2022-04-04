import React from 'react'
import styled from 'styled-components'
import {BiVideoPlus, BiMenu, BiSearchAlt} from 'react-icons/bi'
import {CgMenuGridO} from 'react-icons/cg'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FaMicrophoneAlt} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'

export default function Header() {
  return (
    <Container>
        <Wrapper>
            <Logowrapper>
                <BiMenu size={'38px'}/>
                <BsYoutube size={'38px'} color={'#FF0000'}/>
                <h2>YouTube</h2>
            </Logowrapper>
            <Middlebar>
                <Inner>
                    <input type="Search" />
                    <Search>
                        <BiSearchAlt size={'35px'}/>
                    </Search>
                </Inner>
                <Mic>
                    <FaMicrophoneAlt size={'35px'}/>
                </Mic>
            </Middlebar>
            <Usericons>
                <BiVideoPlus size={'35px'}/>
                <CgMenuGridO size={'35px'}/>
                <IoIosNotificationsOutline size={'35px'}/>
                <img src="/img/ava.jpg" alt="" />
            </Usericons>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const Usericons = styled.div`
    margin-right: 40px;

    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;
const Middlebar = styled.div`
    display: flex;
    background-color: black;
    width: 700px;
    justify-content: space-between;
    align-items: center;
`;
const Logowrapper = styled.div`
    margin-left: 40px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2{
        margin-left: -20px;
    }
`;
const Inner = styled.div`

`;
const Search = styled.div`

`;
const Mic = styled.div`

`;