import React, { useEffect, useState } from 'react'
import MovieInsert from '../components/MovieInsert'
import Search_Movie_Final from '../tasks/SearchCharacter'
import SearchCharacter from '../tasks/SearchCharacter'
import SearchMovie from '../tasks/SearchMovie'
import SearchWithActor from '../tasks/SearchWithActor'
import SearchWithGenre from '../tasks/SearchWithGenre'

const NewPage = () => {
  return (
    <div style={{padding: "50px"}}>
    <h2>검색 마스터</h2>
    <Search_Movie_Final />
    <SearchMovie/>
    <SearchWithGenre/>
    <SearchCharacter/>

    </div>
  )
}

export default NewPage