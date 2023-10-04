import React from 'react'
import styled from 'styled-components';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



const Keyboard = () => {
  return (
    <DIV>
        {KEYS.map((item)=>{
            return <button  key={item}>{item}</button>
        })}
        </DIV>
  )
}

export default Keyboard


const DIV= styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
gap: .5rem;
`