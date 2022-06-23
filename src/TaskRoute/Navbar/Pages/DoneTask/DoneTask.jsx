import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { TodoListContext } from '../../../../App';
import PaginationCpn from '../Pagination/Pagination';

export default function DoneTask() {
   const [todoList, setTodoList] = useContext(TodoListContext)

   const navigate = useNavigate()
   const handleTaskDetail = (item) => {
      navigate(`/task-detail/${item.id}`, { state: { ...item } })
   }

   return (
      <>
         <div className='all-task'>
            {todoList.map((item, index) => {
               if (item.status === 'Done') {
                  return (
                     <div onClick={() => handleTaskDetail(item)} className="task-item" key={index}>
                        <b>Title: {item.title}</b>
                        <p>Creator: {item.creator}</p>
                        <b className={`status ${item.status}`}>Status: {item.status}</b>
                        <p className='desc'><b>Description:</b><br />{item.description}</p>
                     </div>
                  )
               }
            })}
         </div>
         {/* <PaginationCpn></PaginationCpn> */}
      </>
   )
}