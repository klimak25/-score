import React,{useState,useEffect} from 'react'


export default function Ref () {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    const mouseMove = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })    }
    useEffect(() =>{
window.addEventListener('mousemove', mouseMove)
        return () => {
    window.removeEventListener('mousemove', mouseMove)
        }
    },[])

    return (
        <div>
            <h1>Ресурс:{type}</h1>

            <button onClick={() => setType('posts')}>посты</button>
            <button onClick={ () => setType('users')}>Пользеватели</button>
            <button onClick={ () => setType('todos')}>Todos</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>

        </div>
    )
}