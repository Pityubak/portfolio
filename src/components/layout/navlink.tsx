import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { pageIndexChange } from "../../slices/navigationSlice"

interface NavLinkProps {
  icon: any
  text: string
  selected: number
}

interface DoodleType extends Element {
  update: () => void
}

const NavLink = ({ icon, text, selected }: NavLinkProps) => {
  const dispatch = useAppDispatch()
  const { index } = useAppSelector(state => state.navigation)

  const doodle: DoodleType | null =
    typeof document !== "undefined"
      ? document?.querySelector("css-doodle")
      : null

  const desktopToogle = () => {
    dispatch(pageIndexChange(selected))
    doodle?.update()
  }
  return (
    <button
      onClick={() => desktopToogle()}
      className={`px-8 ${
        index === selected && "bg-active"
      } hover:bg-gray-600 hover:text-prl3 transition duration-500 ease-in-out flex items-center font-semibold  text-prl3`}
    >
      {icon}
      {text}
    </button>
  )
}

export default NavLink
