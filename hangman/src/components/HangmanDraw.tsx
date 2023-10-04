import React from 'react'
import styled from 'styled-components'


const HangmanDraw = () => {
  return (
    <DIV>
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