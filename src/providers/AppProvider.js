import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({
  items: null,
  setItems: () => {},
});

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  return (
    <AppContext.Provider value={{ items, setItems }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
