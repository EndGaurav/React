import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            isCompleted: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {} 
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}