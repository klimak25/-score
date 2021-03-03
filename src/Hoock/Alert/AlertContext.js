import React, {useState, useContext} from "react";

 export const AlertContext = React.createContext()
  //export const AlertToggleContext = React.createContext()
export const useAlert = () => {
      return useContext(AlertContext)
 }
//  export const AlertToggle = () => {
//      return useContext(AlertToggleContext)
//  }


export const  AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)

    const toggle = () => setAlert(prev => !prev)
    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            {/*<AlertToggleContext.Provider value={toggle}>*/}
                {children}
            {/*</AlertToggleContext.Provider>*/}
        </AlertContext.Provider>
    )
}