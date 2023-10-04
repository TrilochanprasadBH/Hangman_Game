import './App.css'
// import { getWord } from './api'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import HangmanDraw from './components/HangmanDraw'

interface UserData {
  id: number;
  name: string;
  email: string;
}


const App=()=> {
  const [word, setWord]=useState<UserData[]>([]) 
  const [guessWord, setGuessWord] = useState<string[]>([])

 const getWord=async(): Promise<AxiosResponse<UserData>>=>{
   
 
  try {
    
      const words:AxiosResponse<UserData>= await axios.get(`https://random-word-api.vercel.app/api?words=10`)
      
      
      setWord(words.data)
      
      
  } catch (error) {
      console.log(error)
  }
}

 useEffect(()=>{
        getWord()
 },[])

 console.log(word);
 
 

  return (
   
   <DIV>
      <Div2>Win Or Loose</Div2>
      <HangmanDraw/>
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