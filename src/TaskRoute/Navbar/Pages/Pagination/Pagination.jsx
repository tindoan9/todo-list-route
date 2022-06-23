import React, { useContext, useEffect, useState } from 'react'
import { useMemo } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { TodoListContext } from '../../../../App';

export default function PaginationCpn({ onChange }) {
   const [todoList, setTodoList] = useContext(TodoListContext)
   const [page, setPage] = useState({
      page: 1,
      limit: 12,
      total: todoList.length
   })
   console.log(page)
   const totalPages = Math.ceil(page.total / page.limit)

   // useEffect(() => {
   // }, [page.page])

   useEffect(() => {
      onChange && onChange(page.page);
      const newTodoPage = [...todoList]
      newTodoPage.slice(0, page.limit)
      setTodoList(newTodoPage)
   }, [page.page])

   const listPage = useMemo(() => {
      const list = [];
      for (let i = 1; i <= totalPages; i++) {
         list.push(i);
      }
      return list;
   }, [page.page])
   return (
      <>
         <div className="pagination">
            <Pagination>{listPage.map((item) =>
               <PaginationItem
                  key={`key-${item}`}
                  active={item === page.page}
                  onClick={() => setPage({ ...page, page: item })}
               >
                  <PaginationLink href="">
                     {item}
                  </PaginationLink>
               </PaginationItem>
            )}</Pagination>
         </div>
      </>
   )
}