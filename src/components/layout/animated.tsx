import * as React from "react"

interface AnimatedProps {
  children: React.ReactNode
  index: number
}

const Animated = ({ children, index }: AnimatedProps) => {
  const [animationIndex, setAnimationIndex] = React.useState(0)

  React.useEffect(() => {
    setAnimationIndex(() => (animationIndex + 1) % 2)
  }, [index])

  const [renderedChild, setRenderedChild] =
    React.useState<React.ReactNode | null>(null)

  React.useEffect(() => {
    setTimeout(() => {
      setRenderedChild(() => children)
    }, 850)
  },[children])

  const classes = [
    "downSlide transform translate-y-125",
    "upSlide transform -translate-y-125",
  ]
  return (
    <div className="flex h-full w-full relative ">
      <div className="absolute w-full h-full  z-50 flex content-start">
        <div
          className={`h-full flex-split bg-pattern ${classes[animationIndex]}`}
        ></div>
        <div
          className={`h-full flex-split  bg-pattern   ${
            classes[(animationIndex + 1) % 2]
          }`}
        ></div>
        <div
          className={`h-full flex-split bg-pattern ${classes[animationIndex]}`}
        ></div>
        <div
          className={`h-full flex-split  bg-pattern  ${
            classes[(animationIndex + 1) % 2]
          }`}
        ></div>
        <div
          className={`h-full flex-split bg-pattern  ${classes[animationIndex]}`}
        ></div>
      </div>
      {renderedChild}
    </div>
  )
}

export default Animated
