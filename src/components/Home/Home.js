import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import Topper from '../Topper/Topper'
import Views from '../Views/Views'

export default function Home() {
  return (
    <>  
        <Side>
            <Sidebar/>
            <Sidebar/>
            <Sidebar/>
            <Sidebar/>
            <Sidebar/>
        </Side>
        <Top>
            <Topper/>
            <Topper/>
        </Top>
        <View>
            <Views/>
            <Views/>
            <Views/>
            <Views/>
            <Views/>
            <Views/>
            <Views/>
            <Views/>
        </View>

    </>
  )
}


const View = styled.div`
    /* display: flex; */
    margin-left: 100px;
    background-color: #1b1818;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;


const Top = styled.div`
    display: flex;
    border-bottom: solid #aaa 0.2px;
    border-top: solid #aaa 0.2px;
    margin-left: 100px;
    background-color: #1c0202;
`;


const Side = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #1c0202;
`;