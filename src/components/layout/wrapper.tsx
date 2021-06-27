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
@grid: 1x24 / 50%;
@place-cell: center;
@size: calc(@i * 5%);
border-style: dotted;
border-width: calc(@i * 2px);
border-color: #157A6E;
border-radius: 999px;
opacity: calc(@i() * 0.02);
transform: rotate(@r(360deg));
animation: spin calc(@index() * 7s) cubic-bezier(0.83, 0, 0.17, 1) ;

--f: @rand(360deg);
--t: calc(var(--f) + @pick(1turn, -1turn));

@keyframes spin {
from { transform: rotate(var(--f)) }
to { transform: rotate(var(--t)) }
}
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
