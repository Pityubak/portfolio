import * as React from "react"
import CountUp from "react-countup"
import DownIcon from "../../assets/down.svg"
import UpIcon from "../../assets/up.svg"
import cache from "../../codersrank/codersrank"
import { BadgeProps } from "../../codersrank/types"
import { useAppDispatch, useAppSelector } from "../../slices/hooks"
import { countAnimationOff } from "../../slices/navigationSlice"

const Sidebar = () => {
  let counter = -1
  const [badges, setBadges] = React.useState<Array<BadgeProps> | null>()
  const [translateAmount, setTranslateAmount] = React.useState<number>(0)

  React.useEffect(() => {
    const lowerRank = cache?.badges
      ?.filter(badge => badge.rank < 100)
      .filter(id => id.language !== "Objective-C")
    const otherRank = cache?.badges
      ?.filter(badge => badge.rank > 50)
      .filter(id => id.language !== "Objective-C")
    if (typeof lowerRank !== "undefined" && typeof otherRank !== "undefined") {
      setBadges([...lowerRank, ...otherRank])
    }
  }, [])

  const length = badges?.length ? Math.ceil((badges?.length - 1) / 2) : 0

  const { sidebarCount } = useAppSelector(state => state.navigation)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(countAnimationOff())
    }, 10000)
  }, [])
  return (
    <div className="lg:h-full w-full lg:my-0 my-4 lg:w-48 ">
      {cache && cache.position !== 0 && (
        <div className="w-full h-full   flex flex-col justify-center items-center">
          <div className="w-4/5 flex flex-col justify-center m-4 lg:shadow-2xl  items-center">
            {sidebarCount ? (
              <CountUp
                className="text-prl3 text-lg font-bold"
                duration={10}
                start={100}
                prefix="Top "
                suffix=" %"
                end={cache.position}
              />
            ) : (
              <span className="text-prl3 text-lg font-bold">
                Top {cache.position} %
              </span>
            )}
            <span className="text-prl3"> in Worldwide</span>
          </div>
          <div className="w-4/5 m-4 flex flex-col justify-center lg:shadow-2xl items-center">
            {sidebarCount ? (
              <CountUp
                className="text-prl3 text-lg font-bold"
                duration={10}
                end={cache.score}
              />
            ) : (
              <span className="text-prl3 text-lg font-bold">{cache.score}</span>
            )}
            <span className="text-prl3"> Codersrank score</span>
          </div>
          <button
            disabled={translateAmount === 0}
            onClick={() => {
              setTranslateAmount(
                (translateAmount - 50) % (length !== 0 ? 50 * length : 150)
              )
            }}
            className="hidden lg:block disabled:text-gray-400 text-prl3 rounded-full my-2  transition ease-in-out duration-500 hover:bg-gray-600 p-2"
          >
            <UpIcon />
          </button>
          <div
            className={` lg:h-52 mt-8 lg:mt-0 lg:block flex flex-row flex-wrap lg:flex-nowrap justify-center lg:overflow-hidden relative `}
          >
            {badges?.map(badge => {
              counter++
              return (
                <div
                  key={badge.language + counter}
                  className={`text-sm h-32 lg:h-20 w-20 lg:my-4 mx-4 relative transition duration-700 ease-in-out transform  ${
                    translateAmount === 0
                      ? "lg:-translate-y-0"
                      : translateAmount === 50
                      ? "lg:-translate-y-50"
                      : translateAmount === 100
                      ? "lg:-translate-y-100"
                      : "lg:-translate-y-150"
                  }`}
                >
                  <div className=" shadow-2xl w-full justify-center flex flex-col items-center text-prl3 ">
                    <div
                      className={`w-full bg-pattern4 bg-opacity-10 text-prl3 text-center text-primary rounded-t-md `}
                    >
                      <span>Top {badge.rank}</span>
                    </div>
                    <div className={`w-full  text-center bg-prl3   py-1`}>
                      <span className="mt-1 font-bold text-badge ">
                        {badge.language}
                      </span>
                    </div>
                    <div className="w-full text-center bg-white bg-opacity-10  rounded-b-md  pt-1 pb-3">
                      <span>{badge.location_name}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            disabled={
              translateAmount === (length !== 0 ? 50 * (length - 1) : 100)
            }
            onClick={() => {
              setTranslateAmount(
                (translateAmount + 50) % (length !== 0 ? 50 * length : 150)
              )
            }}
            className=" hidden lg:block text-white disabled:text-gray-400 rounded-full my-2  transition ease-in-out duration-500 hover:bg-gray-600 p-2"
          >
            <DownIcon />
          </button>
          <div className="text-center text-xs lg:m-2  m-4 bg-prl3 lg:px-1 px-2 py-2 lg:py-0 rounded-sm">
            Powered by <strong>Codersrank.io</strong>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
