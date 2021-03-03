import React,{useState, useRef, useEffect} from 'react'


export default function Refer() {

    const [value, setVelue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const  prevValue = useRef('')
    useEffect(() => {
        renderCount.current++
    })
    useEffect(() => {
prevValue.current = value
    },[value])
 const focus = () => inputRef.current.focus()
    return(
        <div>
          <h1>количество рендеров:{renderCount.current}</h1>
            <h2>Прошлое состояние : {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={event => setVelue(event.target.value)} value={value}/>
            <button onClick={focus}>bay</button>
        </div>

    )
}