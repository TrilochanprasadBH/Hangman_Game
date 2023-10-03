import './App.css'
// import { getWord } from './api'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [word, setWord]=useState<string>("") 


 const getWord=async():Promise<void>=>{
   
 
  try {
    
      const words= await axios.get(`https://random-word-api.vercel.app/api?words=10`)
      const data =words.data 
      console.log(data);
      setWord(data)
      
      
  } catch (error) {
      console.log(error)
  }
}

 useEffect(()=>{
        getWord()
 },[])

 
 

  return (
    <>
      <h1>hey</h1>
      
    </>
  )
}

export default App
