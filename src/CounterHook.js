import React, {useState, useContext} from 'react'
import { ThemeContext } from './App'
export default function CounterHook({initialValue}){
    const [count, setCount] = useState( initialValue )
    const style = useContext(ThemeContext)
    return (
        <>
            <div className="container">
                <button style={style} className="btn btn-minus" onClick={()=> setCount(prevCount=> prevCount - 1)} >-</button>
                <span className="display">{ count }</span>
                <button style={style} className="btn btn-plus" onClick={()=> setCount(prevCount=>prevCount + 1)}>+</button>
            </div>
        </>
    )
}