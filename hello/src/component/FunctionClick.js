import React from 'react' // Snippet for import React from 'react' is "rafce" (shortcut) for functional component

function FunctionClick() {
    
    function clickHandler(){
        console.log("Hello!")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>    
  )
}

export default FunctionClick