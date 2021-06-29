import * as React from "react"
import Doodle from "../doodle/doodle"
import useWindowSize from "../hooks/useWindowSize"
import Seo from "../seo"
import Preloader from "../home/preloader"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { triggerOffPreloader } from "../../slices/navigationSlice"
type WrapperProps = {
  children: React.ReactNode
}

const BgDoodle = Doodle`

:doodle { 
  @grid: 20x1 / 50%; 
  --deg: @rand(-25deg, 23deg);
}

transition: @rand(.3s, .6s, .01) ease @rand(.6s);
will-change: transform;


@place-cell: center;
@size: 100%;

border-radius: 50%;
border: 2px solid #157A6E;
transform: rotate(calc(@index() * var(--deg)));
transform-origin: 0 center;
`

const Wrapper = ({ children }: WrapperProps) => {
  const { width } = useWindowSize()
  const [content, setContent] = React.useState<React.ReactNode | null>(
    <Preloader />
  )
  const { index, firstRun } = useAppSelector(state => state.navigation)
  const dispatch = useAppDispatch()

  const callback = () => {
    setContent(
      <>
        {width > 768 && (
          <div className=" absolute w-full h-full top-0 left-0 ">
            {typeof document !== "undefined" && <BgDoodle />}
          </div>
        )}
        <div className="relative  flex  flex-col w-full shadow-2xl   lg:w-10/12 blg:w-8/12 xl:w-9/12  md:items-center lg:rounded-lg  z-50 overflow-hidden bg-shiny bg-cover">
          {children}
        </div>
      </>
    )
    dispatch(triggerOffPreloader())
  }
  React.useEffect(() => {
    setTimeout(callback, firstRun ? 5000 : 0)
  }, [index, firstRun])

  return (
    <>
      <Seo title="PityubakLand" />
      <div className="bg-base relative flex lg:items-center min-h-screen portrait:min-h-screen lg:justify-center w-screen ">
        {content}
      </div>
    </>
  )
}

export default Wrapper
