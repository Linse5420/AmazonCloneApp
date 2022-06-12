import {createContext} from "react";
import React, { useContext,useReducer} from "react";
//setup a datalayer for the record keeping
//this is the data layer
export const StateContext=createContext();
//build a provider
export const StateProvider=({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
);
export const UseStateValue=()=>useContext(StateContext);
