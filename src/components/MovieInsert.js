import React from 'react'

const MovieInsert = () => {
  return (
    <div>
        <h4>Movie_Insert</h4>

    <form >
        <div>id
            <input 
                name='id'
                type="number"
                style={{width:'50px'}}
                />
        
        
       영화제목
            <input 
                name='title'
                type='text'
                style={{width:'250px'}}
                />
        
            <input type='submit' value='넣기'/>
        </div>
    </form>

    </div>
  )
}

export default MovieInsert