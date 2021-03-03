import React from "react";
import {useAlert} from './Alert/AlertContext'

export default function Main () {
    const alert = useAlert()
    return (
        <>
            <h1> Привет и пример с Context</h1>
            <button className={'btn btn-success'} onClick={alert.toggle}>Показать Alert</button>
        </>
    )
}