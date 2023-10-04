import React from 'react'
import styled from 'styled-components'

interface Props {
    word:string,
    guessWord: string[]
  }



const HangmanWord = ({word, guessWord}:Props) => {
  
    const myword:string= word[0];
    // console.log(typeof myword);
    // already taken 
    
    
    return (
    
    <DIV>
        {/* was stuck for 10 min coz of .? !! lol */}
      {myword?.split("").map((letter,index)=>(
       <span key={index} style={{borderBottom:".1em solid black",padding: "0.1rem"}}>
        <span style={{visibility: guessWord.includes(letter)? "visible":"hidden"}}>{letter}</span>
       </span>
      ))}
    </DIV>
  )
}

export default HangmanWord

const DIV = styled.div`
display: felx;
font-weight: bold;
font-family: monospace;
text-transform: uppercase;
font-size: 6rem;
gap: .25rem;
`