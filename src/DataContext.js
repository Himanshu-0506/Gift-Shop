import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <DataContext.Provider value={{ responseData, setResponseData, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
