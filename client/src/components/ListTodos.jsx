import React, { useEffect } from "react";
import { useState } from "react";

const ListTodos = () => {
    
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:3000/todos")
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTodos();
    },);

    //DELETE TODO
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(t => t.todo_id !== id))
            } catch (error) {
                console.error(error);
            }
    }
    

    return(
        <div className="w-1/2 my-4 relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400 rounded-md overflow-hidden">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            Todos
                        </th>
                        <th scope="col" className="px-4 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* MAPING TODOS */}
                    {todos.map(todo => (
                        <tr className=" border-t-1" key={todo.todo_id}>
                            <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                {todo.description}
                            </th>
                            <td className="px-4 py-2 flex justify-end gap-2">

                                {/* EDIT BUTTON */}
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                                {/* end EDIT BUTTON */}

                                {/* DELETE BUTTON */}
                                <button 
                                    className="bg-red-400 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 rounded"
                                    onClick={() => deleteTodo(todo.todo_id)}
                                >
                                    Delete
                                </button>
                                {/* end DELETE BUTTON */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListTodos;