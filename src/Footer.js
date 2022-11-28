import React, {useState} from 'react'

export default function Footer ({footerText, titleText}){
    var [foot, setState] = useState(footerText)
    var [title, changeTitle] = useState(titleText)
    return (
        <>
            <footer>
                <div onClick={()=> setState(prevState=>foot = "add text")}>{foot}</div>
                <div 
                onMouseEnter={()=> changeTitle(prevState=>title='title changed')}
                onMouseLeave={()=> changeTitle(prevState=>title=titleText)}>{title}</div>
            </footer>
        </>
    )
}