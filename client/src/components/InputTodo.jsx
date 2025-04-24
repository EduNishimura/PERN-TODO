import React from "react";
import { useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:3000/todos",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            console.log(response);
        } catch (error){
            console.error(error);
        }
        setDescription("");
    }

    return (
        <div className="w-1/2 items-center">
            <h1 className="text-3xl py-5">Pern Todo List</h1>
            <form action="" className="flex  gap-2" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    placeholder="Adicione uma tarefa" 
                    className="border-2 border-gray-300 rounded-md p-2 w-full" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md h-auto">Adicionar</button>
            </form>
        </div>
    )
};

export default InputTodo;