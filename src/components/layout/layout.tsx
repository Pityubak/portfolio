import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { triggerOffPreloader } from "../../slices/navigationSlice"
import AboutMe from "../about/about"
import Doodle from "../doodle/doodle"
import Footer from "../footer/footer"
import Home from "../home/home"
import Preloader from "../home/preloader"
import Projects from "../projects/projects"
import Header from "./header"
import Wrapper from "./wrapper"

const HoverDoodle = Doodle`
// :doodle { 
//   @grid: 10 / 100%; 
//   perspective: 35em;
// }

// --s: calc(@row() + @col() - 2);
// --delay: calc(var(--s) * -.1s); 


// background: #3c3cd3;
// // animation: r 3s ease-in-out var(--delay) ;
// margin: .4vmin;

// //  @keyframes r { 
// //   to {;
// //   opacity:0; } 
// // }  
`
const Layout = () => {
  const [content, setContent] = React.useState<React.ReactNode | null>(
    <Preloader />
  )
  const { index, firstRun } = useAppSelector(state => state.navigation)
  const dispatch = useAppDispatch()

  const callback = () => {
    setContent(
      <div className="flex items-center w-full">
        <div className=" relative flex flex-col w-full lg:rounded-lg lg:shadow-lg overflow-hidden">
          <Header />
          <div className="flex lg:h-full w-full relative ">
         
            {index === 0 && <Home />}
            {index === 1 && <AboutMe />}
            {index === 2 && <Projects />}
          </div>
          <Footer />
        </div>
      </div>
    )
    dispatch(triggerOffPreloader())
  }
  React.useEffect(() => {
    setTimeout(callback, firstRun ? 5000 : 0)
  }, [index, firstRun])

  return <Wrapper>{content}</Wrapper>
}

export default Layout
