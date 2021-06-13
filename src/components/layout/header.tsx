import * as React from "react"
import HomeIcon from "../../assets/home.svg"
import UserIcon from "../../assets/user.svg"
import WorkIcon from "../../assets/work.svg"
import MenuIcon from "../../assets/menu.svg"
import CloseIcon from "../../assets/close.svg"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { pageIndexChange } from "../../slices/navigationSlice"

const Header = () => {
  const dispatch = useAppDispatch()
  const { index } = useAppSelector(state => state.navigation)

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
            onClick={() => dispatch(pageIndexChange(0))}
            style={
              (index === 0 && {
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
              }) ||
              {}
            }
            className={`px-8  hover:bg-gray-600 hover:text-prl3 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
          >
            <HomeIcon />
            Home
          </button>

          <button
            onClick={() => dispatch(pageIndexChange(1))}
            style={
              (index === 1 && {
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
              }) ||
              {}
            }
            className={`px-8  hover:bg-gray-600  transition duration-500 ease-in-out flex items-center font-semibold  text-primary`}
          >
            <UserIcon />
            About me
          </button>

          <button
            onClick={() => dispatch(pageIndexChange(2))}
            style={
              (index === 2 && {
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
              }) ||
              {}
            }
            className={`px-8  hover:bg-gray-600 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
          >
            <WorkIcon />
            Projects
          </button>
        </div>
        <div className="flex justify-end z-50 w-1/2 lg:hidden relative">
          <button
            onClick={() => togglePanel()}
            className=" px-8 text-prl3 hover:bg-pattern6 transition duration-500 ease-in-out"
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
          style={
            (index === 0 && {
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
            }) ||
            {}
          }
          className={`px-8 py-2 mt-8  hover:bg-pattern6 hover:text-prl3 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
        >
          <HomeIcon />
          Home
        </button>

        <button
          onClick={() => {
            dispatch(pageIndexChange(1))
            togglePanel()
          }}
          style={
            (index === 1 && {
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
            }) ||
            {}
          }
          className={`px-8 py-2 mt-8  hover:bg-pattern6  transition duration-500 ease-in-out flex items-center font-semibold  text-primary`}
        >
          <UserIcon />
          About me
        </button>

        <button
          onClick={() => {
            dispatch(pageIndexChange(2))
            togglePanel()
          }}
          style={
            (index === 2 && {
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
            }) ||
            {}
          }
          className={`px-8 py-2 mt-8 hover:bg-pattern6 transition duration-500 ease-in-out flex items-center font-semibold   text-primary`}
        >
          <WorkIcon />
          Projects
        </button>
      </div>
    </>
  )
}

export default Header
