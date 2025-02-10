// BaristaContext.js
import React, { createContext, useContext, useState } from "react";
import { createUser, fetchBaristas } from "../services/users";

const BaristaContext = createContext();

export const BaristaProvider = ({ children }) => {
  const [baristas, setBaristas] = useState([]);

  const getBaristas = async () => {
    try {
      const data = await fetchBaristas();
      setBaristas(data);
    } catch (error) {
      console.error("Error fetching baristas:", error);
    }
  };

  const addBarista = async (newBarista) => {
    try {
      const response = await createUser({
        data: {
          name: newBarista.name,
          shift: newBarista.shift,
          week: newBarista.week,
        },
      });
      setBaristas((prevBaristas) => [
        ...prevBaristas,
        {
          id: response.data.id,
          attributes: {
            name: newBarista.name,
            shift: newBarista.shift,
            week: newBarista.week,
          },
        },
      ]);
    } catch (error) {
      console.error("Error adding barista:", error);
    }
  };

  return (
    <BaristaContext.Provider value={{ baristas, getBaristas, addBarista }}>
      {children}
    </BaristaContext.Provider>
  );
};

export function useBarista() {
  const context = useContext(BaristaContext);
  if (context === undefined) {
    throw new Error("BaristaContext is not used in BaristaProvider");
  }
  return context;
}
