import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ProductCard from "./component/ProductCard"
import ShowInput from "./Input"
import UserList from "./UserList"

const list=[{name:"ball",price:10,info:"This is a ball for football"},
   {name:"shirt",price:25 ,info:"This is a shirt for summer"}]

const user=[{name:"Ali",age:20,city:"Mashhad"},{name:"Aida",age:22,city:"=Ferdos"},{name:"Sitra",age:17,city:"Hamedan"}]

   const show=(inp)=>{
    console.log(inp)
   }
function App() {

  return (
    <div>
      <ProductCard items={list} />
      <br />
      <br />
      <br />
      <p>second Exercise</p>
      <ShowInput handle={show}/>
      <br />
      <br />
      <br />
      <p>Third Exercise</p>
    </div>
    
  )
}

export default App
