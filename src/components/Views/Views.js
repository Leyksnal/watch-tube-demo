import React from 'react'
import styled from 'styled-components'
import {HiColorSwatch} from 'react-icons/hi'
import {CgPlayListCheck} from 'react-icons/cg'


export default function Views() {
  return (
    <Container>
        <Thumnail>
            <img src="/img/tube.jpg" alt="" />
            <video loop={true} playsInline={true} autoPlay={true} muted>
                <source src="/Assets/videos/marvel.mp4" />
            </video>
            <Hover>
                <Playlist><CgPlayListCheck size={'30px'}/>Add to Playlist</Playlist>
                <Watchlater><HiColorSwatch size={'25px'}/>Watch Later</Watchlater>
            </Hover>
        </Thumnail>
        <Content>
            <img src="/img/ava.jpg" alt="" />
            <Inner>
                <Title>Mr Stella came to Blackmail the judges</Title>
                <Name>Maimi Escort</Name>
                <View>12k views </View>
            </Inner>
        </Content>
    </Container>
  )
}


const Playlist = styled.div`
    background-color: #7E87B6;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    margin-top: 8px;
`;


const Hover = styled.div`
    color: #fff;
    opacity: 1;
    bottom: -140px;
    position: absolute;
    opacity: 0;
    transition: all 800ms;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 50px;
    flex-direction: column;
`;


const Watchlater = styled.div`
    background-color: #7E87B6;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    margin-top: 8px;
`;


const Thumnail = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    cursor: pointer;
    transition: all 500ms;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        opacity: 1;
        /* z-index: 1; */
    }

    video{
        width: 100%;
        height: 200px;
        object-fit: cover;
        position: absolute;
        opacity: 0;
        top: 0;
    }

    :hover{
        video{
            opacity: 1;
            border-radius: 8px;
        }

        img{
            border-radius: 8px;

        }

        div{
            opacity: 1;
        }
    }
`;


const Inner = styled.div`

`;


const Container = styled.div`
    width: 370px;
    transition: all 500ms;
    height: 375px;
    margin-top: 20px;
    margin-left: 20px;

    :hover{
        transform: scale(1.1);
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        background-color: #091425;
    }
`;


const Content = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 15px;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`;


const Title = styled.div`
    font-size: 1rem;
    margin-bottom: 8px;
`;


const Name = styled.div`
    color: #888888;
`;


const View = styled.div`
    color: #888888;

`;