import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { triggerOffPreloader } from "../../slices/navigationSlice"
import AboutMe from "../about/about"
import Footer from "../footer/footer"
import Home from "../home/home"
import Preloader from "../home/preloader"
import Projects from "../projects/projects"
import Header from "./header"
import Wrapper from "./wrapper"

const Layout = () => {
  const [content, setContent] = React.useState<React.ReactNode | null>(
    <Preloader />
  )
  const { index, firstRun } = useAppSelector(state => state.navigation)
  const dispatch = useAppDispatch()

  const callback = () => {
    const direction = Math.round(Math.random() * 2)
    const wrapperClass = `absolute w-full h-full  z-50 flex ${
      direction === 1 && "flex-col"
    } items-center`
    setContent(
      <div className="flex items-center w-full">
        <div className="flex flex-col w-full rounded-lg shadow-lg overflow-hidden">
          <Header />
          <div className="flex h-full w-full relative ">
            <div className={wrapperClass}>
              {index === 0 && (
                <>
                  {" "}
                  <div className="h-full flex-1 bg-red-900 downSlide transform translate-y-125"></div>
                  <div className="h-full flex-1  bg-yellow-900 upSlide transform -translate-y-125"></div>
                  <div className="h-full flex-1  bg-green-900 downSlide transform translate-y-125"></div>
                </>
              )}
              {index === 1 && (
                <>
                  {" "}
                  <div className="h-full flex-1 bg-red-900 upSlide transform -translate-y-125"></div>
                  <div className="h-full flex-1  bg-yellow-900 downSlide transform translate-y-125"></div>
                  <div className="h-full flex-1  bg-green-900 upSlide transform -translate-y-125"></div>
                </>
              )}
            </div>
            {index === 0 && <Home className="" />}
            {index === 1 && <AboutMe className="" />}
            {index === 2 && <Projects className="" />}
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
