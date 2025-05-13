import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
const App= () =>{
  return(
    <>
     <Sidebar/>
     <Main />
    </>
  )
}

export default App