import { createContext, useReducer } from "react"
import reducer from "./reducer";

export default Usercontext = createContext();

const Login2 = () =>
{
    const [state,dispatch] = useReducer(reducer,initialState, init)

    return (
        <>
        <Usercontext.Provider value ={{state,dispatch}} >


        </Usercontext.Provider>
        </>
    )


}