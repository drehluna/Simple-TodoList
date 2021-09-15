import { useState } from 'react'
import useLocalStorage from '../utils/useLocalStorage'
import './styles/card.css'

export default function Card() {

    const [TodoList, SetTodoList] = useLocalStorage("Task", [])
    const [Input, Setinput] = useState()

    const OnSubmitEvent = (e) => {
       let NewItem = Input
       let newArray = [...TodoList, NewItem]
       SetTodoList(newArray)
       console.log(newArray)
    }

    const Remove = (index) => {

        const array = [...TodoList]
       
        array.splice(index,1)

        SetTodoList(array)
    }

    const List = TodoList?.map((itens, index) => <li key={index}>

        {itens}
        <button className="Button" onClick={() => Remove(index)}>Remove</button>
    </li>)

    return (
        <>
            <div className='TitleCard'>
                Todo List
            </div>

            <div className="Card">
                   <div className="Search">


                   <input onInput={e => Setinput(e.target.value)} className="InputTask" type="text" placeholder="New task..."></input>
                    <button onClick={OnSubmitEvent} className="Button">Add Task</button>

                   </div>

                    {List}                    
            </div>
        </>
    )
}