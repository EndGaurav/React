# Redux and Redux toolkit(RTK)

## Always know some terminology for understanding.
- data flow
- Flux, Redux, react-redux, redux-tookit
- store, reducer, useDispatch, useSelector
- useDispatch and useSelector is a wrieup with react-redux.

## First step
- create a store using the method "configureStore" from core redux which is redux toolkit.
- store also known as single source of truth.
```
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({});
```

## Second step
- create reducers: it is nothing but just a functionality. 
- In redux toolkit, we call reducers as sliceses.
- slice is just a bigger version of reducer.
- we use createSlice method from redux toolkit.
- this redux toolkit also provide method for generating unique id. called nanoid.
```
import {createSlice, nanoid} from "@reduxjs/toolkit";
```
- Listen: while create slice we need to pass the initial state
so we can create initialState on way as well or separatly as well.
- Using createSlice method provide the initialstate in object you can use array as well. as we provide in the context API.
- Each sliceses must have one property called 'name'. for identify your slice.
- Each sliceses must have property 'initialState'.
- Each sliceses must have property 'reducers' which is very important because it carries the functionality.
- And because each functionality will have name so its become key value pair. so that's why we will use object for storing reducers.
- one diff from context API is, there we just write the function declaration not the function defination.
- But in RTK: we write the complete defination of the function.
- these function provide the two parameter or argument.
- 1: state and 2: action
- state: it gives you the access of current state.    
- action: all new or dynamic values come to this action.
- In action there is payload method is available. and payload also a object in itself.
- After creating new state dynamically then we inject that dynamically created future state into current state.
- As i have said previously, which one carry our current state that is 'state' argument. 
- So yes, we will inject it into state.
```
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos.filter((item) => item.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((item) => item.id === action.payload ? [{id, text: action.payload}] : item)
        }
    }
})
```

## Third step
- we extract individual functionality from reducer or sliceName.actions.
- individual functionality comes in worky when we create components.
```
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

```
## Fourth step
- That store which we have created in first step, also wants awareness of reducer.
- store: ye ek restrictive store hota hai, ye value har kisi se lekar update nahi karta hai. ye bss unhi ko update karta hai jo reducer uske pass register hote hai.
```
export default todoSlice.reducer
```

## Fivth step
- Provide reducer knowledge to store.
```
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
});
```

## useDispatch
- add todo, mtlb todo main kuch add karna hai, to add karne ke liye hum useDispatch ka use karte hai.
- dispatch reducer(functionality) ko use karte huye store main changes karta hai.
- dispatch --> reducer --> store 
- we reducer inside dispatch.
```
 const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
    }
```
- Above i have provided input argument because text is setting using action.payload
- And it quiet obvious also, because for accessing new value in function definition we pass them while calling that function. 

## useSelector
- jab hume existing value chahiye hoti hai to use hum store se access karte hai.
- useSelector method m humare pass current state ka access hota hai ek callback function m.
```
const todos = useSelector(state => state.todos)
```
- Now we have todos so we can perform our actions.

## Wrapper Provider
- Here we also use the provider provided by react-redux.
- In context API we value prop but here we replace that value variable name with store.
```
import { store } from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```