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
                <BiMenu/>
                <BsYoutube/>
            </Logowrapper>
            <Middlebar>
                <Inner>
                    <input type="Search" />
                    <Search>
                        <BiSearchAlt/>
                    </Search>
                </Inner>
                <Mic>
                    <FaMicrophoneAlt/>
                </Mic>
            </Middlebar>
            <Usericons>
                <BiVideoPlus/>
                <CgMenuGridO/>
                <IoIosNotificationsOutline/>
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
    height: 70px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const Usericons = styled.div`
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;
const Middlebar = styled.div`

`;
const Logowrapper = styled.div`

`;
const Inner = styled.div`

`;
const Search = styled.div`

`;
const Mic = styled.div`

`;