import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [count, setCount] = useState(0);

  const store = {
    count,
    updateCount: () => setCount(count + 1),
  };

  return (
    <>
    <AppContext.Provider value={store}>{children}</AppContext.Provider>;
    </>
  )
}
