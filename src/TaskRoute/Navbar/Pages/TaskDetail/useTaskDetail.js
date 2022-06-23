import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { TodoListContext } from '../../../../App';
import { TODO_LIST_TASK } from '../../../TaskRoute';

const useTaskDetail = () => {
	const [todoList, setTodoList] = useContext(TodoListContext)
   const navigate = useNavigate()

	const handleUpdateTaskItem = (taskItem) => {
		const updateTask = todoList.map(item => {
			if(item.id === taskItem.id){
            return {
               ...item,
               ...taskItem
            }
			}
         return item
		})
      setTodoList(updateTask)
      localStorage.setItem(TODO_LIST_TASK, JSON.stringify(updateTask))
      navigate(`/`)
	}

	const handleDeleteTaskItem = (id) => {
      const deleteTask = todoList.filter(item => item.id !== id)
      setTodoList(deleteTask)
      localStorage.setItem(TODO_LIST_TASK, JSON.stringify(deleteTask))
      navigate(`/`)
	}
	

	return [ handleUpdateTaskItem, handleDeleteTaskItem]
}

export default useTaskDetail