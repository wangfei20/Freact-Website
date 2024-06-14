import React,{ useState, useEffect } from 'freact'
import Home from './home'

export default function App() {
    const [content, setContent] = useState()
    useEffect(async ()=>{
        const res = await fetch("./doc.json")
        const {content} = await res.json()
        setContent(content)
    },[])
   return content ? <Home content={content}/> : <div/>
//return <About/>
}
