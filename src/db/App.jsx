import React from 'react'
import { Nav } from '../Navigation/Nav';
import { Products } from '../Products/Products';
import { Recommened } from '../Remommended/Recommened';
import { Category } from '../Sidebar/Category/Category';
import { Price } from '../Sidebar/Price/Price';
import { Colors } from '../Sidebar/Colors/Colors';
import { Sidebar } from '../Sidebar/Sidebar';
const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommened />
      <Products />
    </>
  )
}

export default App;