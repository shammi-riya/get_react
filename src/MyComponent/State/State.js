import React, { useState } from 'react'

function State() {

    let [number, setNumber] = useState(true)

    let showMe = () => {
       setNumber(!true)

    }
    return (   

    <div>
      
          {number ? <div style={one}></div> : <div style={two}></div>}
          
         
          <button onClick={showMe}>Click</button>
    </div>
  )
}
let one = {
    backgroundColor: "gold",
    height: "200px",
    width: "200px"
}
let two = {
    backgroundColor: "red",
    height: "200px",
    width: "200px"
}

export default State
