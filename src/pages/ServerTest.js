import React from 'react'

const ServerTest = () => {
  return (
    <>
    <h1>ServerTest</h1>
    <form action='http://localhost:3001/calculator' method='post'>
        <input type='number' name='num1' id=''/> 
        <br/>+<br/>
        <input type='number' name='num2' id=''/>
        <br/>
        <button type='submit'>제출</button>

    </form>
    
    </>
  )
}

export default ServerTest