// This class is used from the index.js to create the Data Layer
import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(); //Preparing Data Layer


// Set up for Data Layer. This will  wrap the entire APP in index.js
//  {children} represents < App />
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);