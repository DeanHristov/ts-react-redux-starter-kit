import React, {createContext, useState} from "react";

export const ThemeContext = createContext(null)

const ThemeProvider = (props: any) => {
  const [ state ] = useState(null);

  // TODO Add logic about the theming...
  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
