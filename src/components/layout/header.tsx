import * as React from "react"
import HomeIcon from "../../assets/home.svg"
import UserIcon from "../../assets/user.svg"
import WorkIcon from "../../assets/work.svg"
import MenuIcon from "../../assets/menu.svg"
import CloseIcon from "../../assets/close.svg"
import { useAppDispatch } from "../../slices/hooks"
import { pageIndexChange } from "../../slices/navigationSlice"
import NavLink from "./navlink"

const Header = () => {
  const dispatch = useAppDispatch()

  const [hidden, setHidden] = React.useState(true)

  const togglePanel = () => {
    setHidden(() => !hidden)
  }

  const navigateBetweenPages = (index: number) => {
    togglePanel()
    dispatch(pageIndexChange(index))
  }

  return (
    <>
      <header className="shadow-2xl w-full h-12 flex relative z-100">
        <div className="absolute w-full h-full filter  bg-white   bg-opacity-10 z-0"></div>
        <h1 className="text-prl3 ml-4 font-bold text-xl  w-1/2 md:text-2xl p-2">
          Pityubak
        </h1>

        <div className=" lg:flex justify-end hidden lg:w-4/5 xl:w-3/5 z-50 ">
          <NavLink icon={<HomeIcon />} text="Home" selected={0} />
          <NavLink icon={<UserIcon />} text="About me" selected={1} />
          <NavLink icon={<WorkIcon />} text="Home" selected={2} />
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
            : "flex flex-col fixed w-full h-screen bg-badge z-150 justify-center items-center"
        }`}
      >
        <button
          className="absolute px-4 text-prl3 py-2 -right-0 -top-0 hover:text-yellow-300 transition duration-500 ease-in-out"
          onClick={togglePanel}
        >
          <CloseIcon />
        </button>
        <button onClick={() => navigateBetweenPages(0)} className="mobileLink">
          <HomeIcon />
          Home
        </button>

        <button onClick={() => navigateBetweenPages(1)} className="mobileLink">
          <UserIcon />
          About me
        </button>

        <button onClick={() => navigateBetweenPages(2)} className="mobileLink">
          <WorkIcon />
          Projects
        </button>
      </div>
    </>
  )
}

export default Header
