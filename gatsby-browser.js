import "./src/styles/global.css"
import "css-doodle"
import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/slices/store"

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
