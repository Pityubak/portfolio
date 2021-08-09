import * as React from "react"
import { useAppSelector } from "../../slices/hooks"
import AboutMe from "../about/about"
import Footer from "../footer/footer"
import Home from "../home/home"
import Projects from "../projects/projects"
import Header from "./header"
import Wrapper from "./wrapper"

const Layout = () => {
  const { index } = useAppSelector(state => state.navigation)

  return (
    <Wrapper>
      <div className="flex items-center w-full ">
        <div className=" relative flex flex-col w-full lg:rounded-lg lg:shadow-lg  overflow-hidden">
          <Header />
          <div className="flex lg:h-full w-full relative ">
            {index === 0 && <Home />}
            {index === 1 && <AboutMe />}
            {index === 2 && <Projects />}
          </div>
          <Footer />
        </div>
      </div>
    </Wrapper>
  )
}

export default Layout
