import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import Topper from '../Topper/Topper'
import Views from '../Views/Views'
import {MdSubscriptions} from 'react-icons/md'
import {CgShortcut} from 'react-icons/cg'
import {MdExplore} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {IoIosIceCream} from 'react-icons/io'

export default function Home() {
  return (
    <>  
        <Side>
            <Sidebar icon={<AiFillHome size={'25px'}/>} title='Home'/>
            <Sidebar icon={<MdExplore size={'25px'}/>} title='Explore'/>
            <Sidebar icon={<CgShortcut size={'25px'}/>} title='Shorts'/>
            <Sidebar icon={<MdSubscriptions size={'25px'}/>} title='Subscription'/>
            <Sidebar icon={<IoIosIceCream size={'25px'}/>} title='Library'/>
        </Side>
        <Top>
            <Topper top='Games'/>
            <Topper top='Real Madrid'/>
            <Topper top='Javascript'/>
            <Topper top='Mongodb'/>
            <Topper top='Clever Programmer'/>
            <Topper top='Houston'/>
            <Topper top='Clubhouse'/>
            <Topper top='Space'/>
            <Topper top='Crypto'/>
            <Topper top='Codelab'/>
            <Topper top='Ajegunle'/>
        </Top>
        <View>
            <Views img={"/img/tube.jpg"} title='Mr Stella came to Blackmail the judges' name='Escort' views='20k views'/>
            <Views img={"/img/tube1.jpg"} title='Barcelona bids again' name='Messi' views='420k views'/>
            <Views img={"/img/tube2.jpg"} title='Dont come home now' name='Edwin winnover' views='20k views'/>
            <Views img={"/img/tube3.jpg"} title='You cant live me now' name='Canacal lewis' views='122 views'/>
            <Views img={"/img/ava.jpg"} title='The company hit first milstone of $400,000,000' name='Callmefarad' views='1.6m views'/>
            <Views img={"/img/tube4.jpg"} title='The real sapa is here in houston' name='Papa key' views='900k views'/>
            <Views img={"/img/tube5.jpg"} title='I dont know java' name='Deloveper' views='20k views'/>
            <Views img={"/img/tube6.jpg"} title='Fell free to ask for money' name='Mike Adenuga' views='90k views'/>
            <Views img={"/img/tube8.jpg"} title='To make the living worthwile' name='Dalick Wament' views='20k views'/>
            <Views img={"/img/tube7.jpg"} title='Approach me halfway' name='Dehil' views='50k views'/>
            <Views img={"/img/tube9.jpg"} title='Dont call me your Dog' name='Pablo Mimick' views='250k views'/>
            <Views img={"/img/tube0.jpg"} title='The moment of truth' name='Dafool' views='220k views'/>
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