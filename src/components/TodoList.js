import React, { useEffect, useState } from "react";
import axios from 'axios'

export const TodoList = () => {
    const [items, setItems] = useState()

    useEffect(
        async ()=> {
        const result = await axios.get('http://0.0.0.0:3001/api/items')
        console.log('result', result)
        setItems(result.data)
        // .catch(err => console.log(err))
        // setItems(result.data)

    }, [])

    
    return(
        <>

        <h1>Hello from TodoList</h1>
        {items? 
        <>
         <div> 
          {items.map((item, index)=> (
            <div key={index}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div><img width={200} src={item.image} alt='사진'/> </div>
            <div>{item.birthday}</div>
            <div>{item.gender}</div>
            <div>{item.job}</div>
            </div>
        ))}
        </div>
        </> 
        : 
        <>
        <div>loading...</div>
        </>}
       

        </>
    )

}