import "./src/styles/global.css"
// import "./src/styles/background.css"
import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/slices/store"

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
