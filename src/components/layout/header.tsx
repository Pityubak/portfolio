import * as React from "react"
import HomeIcon from "../../assets/home.svg"
import UserIcon from "../../assets/user.svg"
import WorkIcon from "../../assets/work.svg"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { pageIndexChange } from "../../slices/navigationSlice"

const Header = () => {
  const dispatch = useAppDispatch()
  const { index } = useAppSelector(state => state.navigation)
  return (
    <header className="shadow-2xl w-full h-12 flex relative z-100">
      <div className="absolute w-full h-full filter  bg-white   bg-opacity-10 z-0"></div>
      <h1 className="text-primary ml-4 font-bold  w-1/2 text-2xl p-2">Pityubak</h1>

      <div className=" flex justify-end w-1/2 z-50 ">
        <button
          onClick={() => dispatch(pageIndexChange(0))}
          className={`px-8 ${
            index === 0 && "bg-pattern6 "
          } hover:bg-gray-600 hover:text-prl3 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
        >
          <HomeIcon />
          Home
        </button>

        <button
          onClick={() => dispatch(pageIndexChange(1))}
          className={`px-8 ${
            index === 1 && "bg-pattern6"
          } hover:bg-gray-600  transition duration-500 ease-in-out flex items-center font-semibold  text-primary`}
        >
          <UserIcon />
          About me
        </button>

        <button
          onClick={() => dispatch(pageIndexChange(2))}
          className={`px-8 ${
            index === 2 && "bg-pattern6"
          } hover:bg-gray-600 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
        >
          <WorkIcon />
          Projects
        </button>
      </div>
    </header>
  )
}

export default Header
