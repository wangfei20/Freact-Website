import React,{useEffect,useRef} from "freact"

export default function About() {
  const headerRef = useRef(null)
  const introRef = useRef(null)
  useEffect(()=>{
    const onScroll = ()=>{
      const elementTop = introRef.current.getBoundingClientRect().top;
      if (elementTop <20) {
        headerRef.current.classList.remove("hidden")
        return
      }
      headerRef.current.classList.add("hidden")
    }
    window.addEventListener("scroll",onScroll)
    return ()=>window.removeEventListener("scroll",onScroll)
  },[])
  return (
    <div className="bg-white min-h-[150vh] py-12">
      <div ref={headerRef} className="fixed text-white inset-x-0 top-0 hidden 
        bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 p-2 text-center font-semibold">
        Fiona <span className="text-slate-700">Wang</span>
      </div>

      <div className="md:w-[80%] lg:w-[900px] md:mx-auto flex flex-col space-y-24 px-3 sm:px-8">
        <div ref={introRef} className="text-5xl text-slate-700 text-left font-semibold">
      
          Fiona 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500"> Wang</span>
          <span className="text-white leading-[1.2]" role="img" aria-label="woman technologist">👩🏻‍💻</span>
        </div>

        <div className="text-slate-800 text-lg sm:w-[70%] leading-[1.75em] font-light">
            Hi there! 
            <div className="mt-4">
            I am an experienced programmer passionately in love with JavaScript and NodeJs. This adoration and obsession continuously drive me to explore and uncover their internal mysteries. My entire journey as a JS developer has been a unique exploration of open-source software. From JQuery to Promise, from CommonJS modules to ES modules, from Express to Hexo, from React to Nextjs, from esBuild to webpack, nearly every significant framework and tool, I dive into reverse engineering from meticulously experiencing them. I never join any open-source projects intending to leave my name on them, as that simply cannot gratify my immense curiosity. The only way I can be satisfied is to recreate the entire framework from scratch, all by myself. 
            </div>

          </div>

        <div className="-p-2 projects text-[7vw] md:text-[5vw] bg-clip-text text-transparent 
                        bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 
                        text-center font-semibold flex flex-wrap">
          <div>
            <a href="https://github.com/wangfei20/FreactJs">ReactJs</a>
            <span className="text-slate-800">,</span>
          <a href="https://github.com/wangfei20/WhatIsNext">NextJs</a>
          {/* <span className="text-slate-800">,</span> */}
          
          </div>

          <div>
          <a href="https://github.com/wangfei20/FreactJs/blob/master/src/router.js">Router</a>
          <span className="text-slate-800">,</span>
            <a className="text-slate-800" href="https://github.com/wangfei20/FreactJs/blob/master/demo/components/CSSTransition.js">CSSTransition</a>
          </div>

          

          <div>
          <a href="https://github.com/wangfei20/nodejs-lab/blob/master/express/pipeline.js">ExpressJs</a>
          <span className="text-slate-800">,</span>
          <a href="https://github.com/wangfei20/nodejs-lab/blob/master/express/bodyParser.js" className="text-slate-800">Body Parser</a>
          </div>

          <div>
          <a className="text-slate-800" href="https://github.com/wangfei20/nodejs-lab/blob/master/hexo/hexo.js">HexoJs</a>
          <span className="text-slate-800">,</span>
          <a href="https://github.com/wangfei20/nodejs-lab/blob/master/promise.js">Promise</a> 
          <span className="text-slate-800">,</span>
          <a href="https://github.com/wangfei20/nodejs-lab/blob/master/fei.js">FJS.</a>
          </div>
        </div>

        <div className="flex place-content-between py-4 text-black mt-24">
          <div>© 2024 <span className="white-space">Fiona Wang</span></div>
          <div className="footer-contacts flex space-x-2">
            <a href="https://github.com/wangfei20" target="_blank" >
              Github
            </a>
            <a href="https://www.linkedin.com/in/fionacodes/" target="_blank" >
              LinkedIn
            </a>
            <a href="mailto://fey.wang@outlook.com" target="_blank" >
              Email
            </a>
          </div>
        </div>

      </div>
      
    </div>
  )
}
/*I'm an experienced programmer who's crazy about React.js and Next.js.
            <br/>I also wrote Freact, a minimal and powerful React-Like Library, and many more.*/