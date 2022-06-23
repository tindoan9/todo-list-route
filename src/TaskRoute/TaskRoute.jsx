import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TodoListContext } from '../App'
import Navbar from './Navbar/Navbar'
import AllTask from './Navbar/Pages/AllTask/AllTask'
import CreateTask from './Navbar/Pages/CreateTask/CreateTask'
import DoingTask from './Navbar/Pages/DoingTask/DoingTask'
import DoneTask from './Navbar/Pages/DoneTask/DoneTask'
import NewTask from './Navbar/Pages/NewTask/NewTask'
import SearchItem from './Navbar/Pages/SearchItem/SearchItem'
import TaskDetail from './Navbar/Pages/TaskDetail/TaskDetail'

export const TODO_LIST_TASK = 'TASK_ITEM'

export function TaskRoute() {
   const [todoList, setTodoList] = useContext(TodoListContext)

   useEffect(() => {
      const storedTask = localStorage.getItem(TODO_LIST_TASK)
      if (storedTask === null) {
         setTodoList([])
         return
      }
      setTodoList(JSON.parse(storedTask))
   }, [])

   return (
      <>
         <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
               <Route path="/" element={<AllTask></AllTask>}></Route>
               <Route path="/create-task" element={<CreateTask></CreateTask>}></Route>
               <Route path='/new-task' element={<NewTask></NewTask>}></Route>
               <Route path='/doing-task' element={<DoingTask></DoingTask>}></Route>
               <Route path='/done-task' element={<DoneTask></DoneTask>}></Route>
               <Route path='/task-detail/:id' element={<TaskDetail></TaskDetail>}></Route>
               <Route path='/search-task' element={<SearchItem></SearchItem>}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}