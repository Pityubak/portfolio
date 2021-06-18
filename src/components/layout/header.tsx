import * as React from "react"
import HomeIcon from "../../assets/home.svg"
import UserIcon from "../../assets/user.svg"
import WorkIcon from "../../assets/work.svg"
import MenuIcon from "../../assets/menu.svg"
import CloseIcon from "../../assets/close.svg"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { pageIndexChange } from "../../slices/navigationSlice"

interface DoodleType extends Element {
  update: () => void
}

const Header = () => {
  const dispatch = useAppDispatch()
  const { index } = useAppSelector(state => state.navigation)
  const doodle: DoodleType | null =
  typeof document !== "undefined" ? document?.querySelector("css-doodle") : null
  const [hidden, setHidden] = React.useState(true)

  const togglePanel = () => {
    setHidden(() => !hidden)
  }
  return (
    <>
      <header className="shadow-2xl w-full h-12 flex relative z-100">
        <div className="absolute w-full h-full filter  bg-white   bg-opacity-10 z-0"></div>
        <h1 className="text-primary ml-4 font-bold text-xl  w-1/2 md:text-2xl p-2">
          Pityubak
        </h1>

        <div className=" lg:flex justify-end hidden lg:w-4/5 xl:w-3/5 z-50 ">
          <button
            onClick={() => {
              dispatch(pageIndexChange(0))
              doodle?.update()
            }}
            className={`px-8 ${
              index === 0 && "bg-active"
            } hover:bg-gray-600 hover:text-prl3 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
          >
            <HomeIcon />
            Home
          </button>

          <button
            onClick={() => {
              dispatch(pageIndexChange(1))
              doodle?.update()
            }}
            className={`px-8 ${
              index === 1 && "bg-active"
            }  hover:bg-gray-600  transition duration-500 ease-in-out flex items-center font-semibold  text-primary`}
          >
            <UserIcon />
            About me
          </button>

          <button
            onClick={() => {
              dispatch(pageIndexChange(2))
              doodle?.update()
            }}
            className={`px-8 ${
              index === 2 && "bg-active"
            } hover:bg-gray-600 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
          >
            <WorkIcon />
            Projects
          </button>
        </div>
        <div className="flex justify-end z-50 w-1/2 lg:hidden relative">
          <button
            onClick={() => togglePanel()}
            className=" px-8 text-prl3 hover:bg-active transition duration-500 ease-in-out"
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      <div
        className={`${
          hidden
            ? "hidden"
            : "flex flex-col fixed w-full h-screen bg-pattern z-150 justify-center items-center"
        }`}
      >
        <button
          className="absolute px-4 text-prl3 py-2 -right-0 -top-0 hover:text-yellow-300 transition duration-500 ease-in-out"
          onClick={togglePanel}
        >
          <CloseIcon />
        </button>
        <button
          onClick={() => {
            dispatch(pageIndexChange(0))
            togglePanel()
          }}
          className={`px-8 py-2 mt-8  hover:bg-active hover:text-prl3 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
        >
          <HomeIcon />
          Home
        </button>

        <button
          onClick={() => {
            dispatch(pageIndexChange(1))
            togglePanel()
          }}
          className={`px-8 py-2 mt-8  hover:bg-active transition duration-500 ease-in-out flex items-center font-semibold  text-primary`}
        >
          <UserIcon />
          About me
        </button>

        <button
          onClick={() => {
            dispatch(pageIndexChange(2))
            togglePanel()
          }}
          className={`px-8 py-2 mt-8 hover:bg-active transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
        >
          <WorkIcon />
          Projects
        </button>
      </div>
    </>
  )
}

export default Header
