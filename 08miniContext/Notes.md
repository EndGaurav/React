# context API
- prop drilling was the problem.
- solution: for prop drilling is context API.
- but 'prop drilling' problem was not just in react, it was in Vue js and backbone js which was available before react library.
- so that'why 'Redux' library comes into the picture. it's a standalone library.  
- Redux: it's state management library. pass the data in an organise way.
- Redux have multiple versions.
- React-redux is for react.
- Redux has much more easier version known as 'Redux toolkit'. (RTK)

# context API
- An global variable will get declared and all the data will go into that. 

## Part One:
```React Context
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

## Part Two:
- After creating context and now create a provider. 
- Provider is the one which provide the data.
- How to use that provider, let's see the example.
```Provider example
provider example: Here any component can access state of all data from UserContext.
<UserContext>
    <Login />
    <Signup />
    <card>
        <Data />
    </card>
</UserContext>
```

## Part Three:
- children is same as Outlet in react-router-dom.
- it's automatically pass all the props from itself.

```
children access, provider, passing data as object.
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    // Whatever the API call you wanna make, just make it here
    // Then pass it as prop in object inside Provider wrapper.
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>     
    )
}

export default UserContextProvider;
```

