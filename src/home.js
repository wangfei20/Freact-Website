import React,{ useEffect,useRef, useState, useMemo } from "freact";
import MDContent from "@/components/MDContent";
import 'prismjs/themes/prism-dark.css'


export default function Home({content}) {
  const homeImgRef = useRef()
  const homeIntroRef = useRef()
  const effectActiveRef = useRef(false)
  const [navActive, setNavActive] = useState(false)
  const navLinksRef = useRef([])
  const [loaded, setLoaded] = useState(false)
  
  const onLoad = ()=> {
    console.log("load");
    setLoaded(true)
  }

  function onScroll(){
    const scrollPosition = window.scrollY;
    let effectActive = effectActiveRef.current
    
    if(scrollPosition > 100 && !effectActive){
      homeImgRef.current.classList.add("brightness-[0.3]")
      homeIntroRef.current.classList.add("opacity-0")
      effectActiveRef.current = true
    } else if(scrollPosition <= 100 && effectActive){
      homeImgRef.current.classList.remove("brightness-[0.3]")
      homeIntroRef.current.classList.remove("opacity-0")
      effectActiveRef.current = false
    }
  }

  function toggleNav(){
    setNavActive(!navActive)
  }

  useEffect(()=>{
    window.addEventListener('load', onLoad)
    window.addEventListener('scroll', onScroll);
    onScroll()
    setLoaded(true)
    
    navLinksRef.current = Array.from(document.querySelectorAll(".md-content h2"))
    console.log("navlink",navLinksRef.current);
    return ()=>{
      window.removeEventListener("load",onLoad);
      window.removeEventListener('scroll', onScroll);
    }
  },[])

  const navLinks = useMemo(()=>{
    if(loaded){
      let navs = Array.from(document.querySelectorAll(".md-content h2"))
      console.log(navs);
      return navs
    }
  },[loaded])

  function navigateTo(n){
    n.scrollIntoView({
      behavior: "smooth",
      block:"start"
    });
    setNavActive(false)
  }

  console.log("home",navLinks);

  return (
    <main>
      <div className="fixed h-screen w-full -z-[1]">
        <img ref={homeImgRef} className="bg-slate-800 object-cover h-screen w-full transition-filter duration-700" 
            src="./background.jpg"/>
      </div>
      <div ref={homeIntroRef} className="transition-opacity duration-700 h-screen 
        w-full flex items-center justify-center flex-col font-bold">
        <h1 className="md:text-9xl text-7xl text-shadow-xl text-white">Freact</h1>
        <h3 className="text-xl text-gray-200 mt-3 mb-7 text-center">The minimal React-like Framework</h3>
        <button className="focus:outline focus:outline-4 focus:outline-red-400 
          px-7 py-4 text-white rounded bg-red-700 hover:bg-red-600 text-lg transition-colors"
          onclick={()=>{navigateTo(navLinks[0])}}>
          START
        </button>
      </div>
      <div className="flex justify-center px-3 sm:px-8 pb-10">
        <div className="max-w-full 2xl:max-w-[1000px] md:max-w-[800px] text-white/80 md-content">
          <MDContent content={content}>
          </MDContent>
        </div>
        
      </div>
      <div className="mt-12 mb-[120px] text-center">
        <a href="https://github.com/wangfei20/Freact" className="text-shadow !inline-block -rotate-[5deg] transform whitespace-nowrap text-center font-serif text-3xl font-extrabold leading-none transition-colors duration-300 ease-in-out text-red-500 hover:text-white sm:mr-4 sm:text-6xl">
          Powered by Freact!
        </a>
      </div>

      
      <div onclick={toggleNav} className={`fixed z-50 right-4 top-3 md:right-8 md:top-5 text-2xl text-red-700 bg-black/80 cursor-pointer
        w-[55px] h-[55px] flex items-center justify-center rounded-full
        hover:outline hover:outline-4 hover:outline-red-500 focus:outline focus:outline-4 focus:outline-red-500
        ${navActive ? "outline outline-4 outline-red-500 outline outline-4 outline-red-500 md:opacity-0 transition-opacity duration-500" : ""

        }`}>
        <img src="./logo.svg" className="w-4 h-4"/>
      </div>
      
      
      <div onclick={toggleNav} className={`${navActive ? "md:block" : ""} hidden fixed w-full h-screen top-0 left-0`}></div>
      
      <nav className={`fixed bg-black items-center
      w-full h-screen top-0 px-10 py-6 justify-between flex flex-col
      md:w-[350px] md:h-auto md:top-10 md:bottom-10 md:right-5 md:rounded-lg 
      md:border md:border-gray-600 md:p-10 ${navActive ? "" : "hidden"}`}>
        <h1 className="text-5xl text-center drop-shadow-lg font-bold text-white">Freact</h1>
        <div className="scrollable text-gray-400 mt-10 mb-5 flex-1 w-full">
          {
            navLinks?.map((n,i) => 
            <div key={n.id} onclick={()=>navigateTo(n)} 
              className="py-2 cursor-pointer hover:text-white md:text-sm transition duration-500">
              {n.innerText}
            </div>
            )
          }
        </div>
        <div className="contacts mb-10 md:mb-0 w-auto">
          <a href="https://github.com/wangfei20/Freact" target="_blank" >
            Github
          </a>
          <a href="https://fiona-wang.vercel.app" target="_blank" >
            Website
          </a>
          <a href="mailto://fey.wang@outlook.com" target="_blank" >
            Email
          </a>
        </div>
      </nav>
      
    </main>
  );
  //<CSSTransition in={navActive} timeout={3000} classNames="show" unmountOnExit>
}

