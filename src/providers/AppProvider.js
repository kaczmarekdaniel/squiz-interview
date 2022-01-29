import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({
  items: null,
  setItems: () => {},
});

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      fetch("https://dujour.squiz.cloud/developer-challenge/data")
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.error(err));
    };
    fetchItems();
  }, []);

  return (
    <AppContext.Provider value={{ items, setItems }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
