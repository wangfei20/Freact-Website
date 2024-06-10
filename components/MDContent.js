import Prism from "prismjs"
import 'prismjs/themes/prism-dark.css'

import React,{ useEffect,useRef,memo } from "freact"

function MDContentComponent({content,children}) {
    const mdContentRef = useRef()
    useEffect(()=>{
        if(content){
            const mdContent = mdContentRef.current
            mdContent.innerHTML = content
            Prism.highlightAll()
            document.querySelectorAll("pre").forEach((p) => {p.className = ""});
        }
    },[content])

    console.log("MDContentComponent");

    return <div ref={mdContentRef} className="text-white/80 md-content" 
            id="md-content">
    </div>
}

const MDContent = memo(MDContentComponent)

export default MDContent