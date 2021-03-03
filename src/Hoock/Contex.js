import React from "react";
import Main from "./Main ";
import Alert from "./Alert/Alert";


export default function Context () {
    return (
       // <AlertContext.Provider>
            <div className={'container pt-3'}>
               <Alert/>
               <Main/>
            </div>
        // </AlertContext.Provider>
    )
}