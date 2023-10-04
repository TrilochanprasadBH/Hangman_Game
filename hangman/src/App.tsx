import './App.css'
// import { getWord } from './api'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import HangmanDraw from './components/HangmanDraw'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

interface UserData {
  word:string 
}


const App=()=> {
  const [word, setWord]=useState<UserData[]>([]) 
  const [guessWord, setGuessWord] = useState<string[]>([])

  const incorrectGuess = guessWord.filter((le) => !word[0]?.word.includes(le));


 const getWord=async(): Promise<AxiosResponse<UserData>>=>{
   
 
  try {
    
      const words:AxiosResponse<UserData>= await axios.get(`https://random-word-api.vercel.app/api?words=10`)
      setWord(words.data)

  } catch (error) {
      console.log(error)
  }
}


  

   const addGuessLetter =useCallback((letter:string)=>{
    if(guessWord.includes(letter))return 

    setGuessWord((cletter)=> [...cletter, letter])
   },[guessWord])

 useEffect(()=>{
        getWord() 
     
      const handler = (e:KeyboardEvent)=>{
          const key= e.key
          console.log(key);
          
          if(!key.match(/^[a-z]$/)) return 

          e.preventDefault();
          addGuessLetter(key)
      }
  document.addEventListener("keypress", handler)


  return () =>{
    document.removeEventListener("keypress", handler);
  }

 },[guessWord])

 console.log(word);
 
 

  return (
   
   <DIV>
      <Div2>Win Or Loose</Div2>
      <HangmanDraw noofguess={incorrectGuess.length}/>
      {word.length > 0 && (
        <HangmanWord word={word} guessWord={guessWord} />
        // <HangmanWord guess word={word} guessWord={guessWord}/>
      )}
      
     <div style={{alignSelf:"stretch"}}>
     <Keyboard/>
     </div>
      
    </DIV>
  )
}

export default App

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;
  align-items: center;
  background-color: floralwhite;
`
const Div2=styled.div`
  align-items: center;
  font-size: 3rem;
`