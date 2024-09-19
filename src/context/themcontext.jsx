import { createContext, useState } from "react";

 export const ThemeContext = createContext()


function Theme({children}) {
  const [theme, setTheme] = useState('dark')
    return(
        <>
<ThemeContext.Provider value={{setTheme, theme}}>
{children}
</ThemeContext.Provider></>
    )
  
}

export default Theme