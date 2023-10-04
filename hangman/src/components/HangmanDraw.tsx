import React from 'react'
import styled from 'styled-components'


const HEAD = (
    <div style={{width:"50px", height:"50px", borderRadius:"100%", border:"10px solid black", position:"absolute", top:"50px", right:"-30px"}}/>
)

const BODY = (
    <div style={{width:"10px", height:"120px", background:"black", position:"absolute", top:"120px", right:"0px"}}/>
)

const RIGHT_HAND = (
    <div style={{width:"100px", height:"10px", background:"black", position:"absolute", top:"150px", right:"-100px", rotate:"-30deg", transformOrigin:"left bottom"}}/>
)

const LEFT_HAND = (
    <div style={{width:"100px", height:"10px", background:"black", position:"absolute", top:"150px", right:"10px", rotate:"30deg", transformOrigin:"right bottom"}}/>
)

const RIGHT_LEG = (
    <div style={{width:"120px", height:"10px", background:"black", position:"absolute", top:"230px", right:"-110px", rotate:"60deg", transformOrigin:"left bottom"}}/>
)

const LEFT_LEG = (
    <div style={{width:"120px", height:"10px", background:"black", position:"absolute", top:"230px", right:"0px", rotate:"-360deg", transformOrigin:"right bottom"}}/>
)

const Body_part = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG];


interface Props{
    noofguess:number 
}


const HangmanDraw = ({noofguess}:Props) => {
  
  
    return (
    <DIV>
       {/* {HEAD}
       {BODY}
       {RIGHT_HAND}
       {LEFT_HAND}
       {RIGHT_LEG}
       {LEFT_LEG} */}
       {Body_part.slice(0,noofguess)}
        <DIV_small/>
        <DIVHor/>
        <DIVVer/>
        <DIVB/>
    </DIV>
  )
}

export default HangmanDraw

const DIV= styled.div`
    position: relative;
`
const DIVB= styled.div`
 height: 6px;
 width: 300px;
 background: black;
`
const DIVVer= styled.div`
    height: 500px;
    width: 6px;
    background: black;
    margin-left: 150px;
`
const DIVHor= styled.div`
     height: 6px;
    width: 200px;
    background: black;
    margin-left: 150px;
`
const DIV_small=styled.div`
    height: 50px;
    width: 6px;
    background: black;
    position: absolute;
    right: 0px;
    top: 0px;
`
