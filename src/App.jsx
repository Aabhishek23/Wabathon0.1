import React from "react"
import './App.css'
import './index.css'
import Square from "./Square/Square"


const App = () => {

  return (

    <div className="main-div">
      <div>
        <h1 className="game-heading water-background">My First React App</h1>
      
      <div className="square-wrapper">
      <Square />  
      </div>
      
      </div>

    </div>
  )

}

export default App