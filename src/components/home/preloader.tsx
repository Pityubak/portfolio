import * as React from "react"
import Me from "../../assets/me.svg"
const Preloader = () => (
  <div className=" flex flex-col w-full text-prl3 md:w-96 items-center mt-16 justify-center">
    <div className="flex items-center w-4/5 uhd:w-250 uhd:lg-250 ">
      <Me />
    </div>
    <h1 className="text-lg hd:text-xl uhd:text-3xl kd:text-4xl my-8 font-semibold">Hi! Almost there...</h1>
  </div>
)

export default Preloader
