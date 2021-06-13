import * as React from "react"
import Me from "../../assets/me.svg"
const Preloader = () => (
  <div className=" flex flex-col w-full text-prl3 md:w-96  items-center mt-16 justify-center">
    <div className="flex items-center w-4/5 border">
      <Me />
    </div>
    <h1 className="text-lg my-8 font-semibold">Hi! Almost there...</h1>
  </div>
)

export default Preloader
