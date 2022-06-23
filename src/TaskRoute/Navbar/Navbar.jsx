import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TodoListContext } from '../../App'

export default function Navbar() {
   const [todoList, setTodoList, searchTask, setSearchTask] = useContext(TodoListContext)
   const [search, setSearch] = useState('')
   const navigate = useNavigate()
   let listTask = [
      { path: '/', text: 'All Task' },
      { path: '/new-task', text: 'New Task' },
      { path: '/doing-task', text: 'Doing Task' },
      { path: '/done-task', text: 'Done Task' },
   ]
   const handleSearchSubmit = (keyWork) => {
      const todoSearchList = todoList.filter(item => {
         return item.title.toUpperCase().search(keyWork.toUpperCase()) !== -1
      })
      setSearchTask(todoSearchList)
      navigate(`/search-task`)
   }

   return (
      <div className='wrapper'>
         <div className="tool-bar">
            <NavLink to={'/create-task'}>
               <h2 className='create-task'>Create New task</h2>
            </NavLink>
            <div className="search">
               <input type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Type something to search' />
               <NavLink to={'/search-task'}>
                  <button onClick={() => handleSearchSubmit(search)} type='button'>Search</button>
               </NavLink>
            </div>
         </div>
         <div className="navbar">
            {listTask.map((item, index) => {
               return (
                  <NavLink key={index} to={item.path}>
                     <p>{item.text}</p>
                  </NavLink>
               )
            })}
         </div>
      </div>
   )
}