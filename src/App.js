import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainContainer } from './screens/MainContainer';

export const App = () => {
  return (
    //
    <>    
      <Router>
        <Routes>
            <Route exact path="/" element={<MainContainer />}/>
        </Routes>
      </Router>
    </>    
  )
}
