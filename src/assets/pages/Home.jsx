import React from 'react'
import { Header } from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'

export default function Home() {
  return (
    <div>
         <Navbar/>
        <Header/>
        <Products/>
    </div>
  )
}
