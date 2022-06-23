import React, { useEffect } from 'react';
import { useContext } from 'react';
import { TodoListContext } from '../../../../App';
import {v4} from 'uuid'
import { TODO_LIST_TASK } from '../../../TaskRoute';

const useCreateTask = () => {
	const [todoList, setTodoList] = useContext(TodoListContext)


	const handleCreateTask = (title, creator, createdAt, description, status) => {
		if(description === '') return;
		let taskItem = {
			id: v4(),
			title: title,
			creator: creator,
			createdAt: createdAt,
			description: description,
			status: status
		}
		let newTask = [taskItem, ...todoList]
		setTodoList(newTask)
      		localStorage.setItem(TODO_LIST_TASK, JSON.stringify(newTask))
	}

	return [handleCreateTask]
}

export default useCreateTask