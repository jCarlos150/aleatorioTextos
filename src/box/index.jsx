import React, {useState, useEffect} from "react";
import "./style.css"
import { AiFillTwitterSquare, AiFillBehanceSquare } from 'react-icons/ai'
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { chanceColorWithColor } from "../features/counter/alterarCores";

const Box = () => {
   const [texts, setTexts] = useState([])
   const [index, setIndex] = useState(0)
   const color = useSelector(state => state.color.value)
   const dispatch = useDispatch()

   useEffect(()=>{
      axios.get("https://pensador-api.vercel.app/?term=Jesus+Cristo&max=7").then((r)=>{
         setTexts(r.data.frases)
         console.log(texts)
      })
   },[])

   useEffect(()=>{
      console.log(index)
      setIndex(Math.floor(Math.random()*7))
   },[texts])

   const handleFrase = () => {
      setIndex(Math.floor(Math.random() *7))
      dispatch(chanceColorWithColor(index))

   }
   
   return (
      <div  id="quote-box">
      <div className="tts">
         <h2 id="text" style={{color:color}}>"{texts.length === 0 ? "Carregando.." : texts[index].texto}</h2>
         <p id="author" style={{color:color}} >-{texts.length === 0 ? "Carregando.." : texts[index].autor}</p>   
      </div>
      <div className="bts">
         <div className={"icons"}>
           <a id="tweet-quote" target="_blank" href="https://twitter.com/FrasesDeJess2"><AiFillTwitterSquare className={"icon"} style={{color: color}}  id="tweet-quote"/></a>
           <AiFillBehanceSquare className={"icon"} style={{color: color}} id="fb-quote"/>
         </div>
         <button id={"new-quote"} style={{backgroundColor:color}} onClick={handleFrase}>New quote</button>
      </div>
  </div>
   )
}



export default Box;