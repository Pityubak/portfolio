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
    const lowerRank = cache?.badges?.filter(badge => badge.rank < 100)
    const otherRank = cache?.badges?.filter(badge => badge.rank > 50)
    if (typeof lowerRank !== "undefined" && typeof otherRank !== "undefined") {
      setBadges([...lowerRank, ...otherRank])
    }
  }, [])

  const { sidebarCount } = useAppSelector(state => state.navigation)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(countAnimationOff())
    }, 10000)
  }, [])
  return (
    <div className="h-full h-136  w-48    ">
      {cache && cache.position !== 0 && (
        <div className="w-full h-full   flex flex-col justify-center items-center">
          <div className="w-4/5 flex flex-col justify-center m-4 shadow-2xl  items-center">
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
          <div className="w-4/5 m-4 flex flex-col justify-center shadow-2xl items-center">
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
              setTranslateAmount((translateAmount - 50) % 150)
              // recreateBadgeArray()
            }}
            className=" disabled:text-gray-400 text-prl3 rounded-full my-2  transition ease-in-out duration-500 hover:bg-gray-600 p-2"
          >
            <UpIcon />
          </button>
          <div className={` h-52 overflow-hidden relative `}>
            {badges?.map(badge => {
              counter++
              return (
                <div
                  key={badge.language + counter}
                  className={`text-sm h-20 w-20 my-4 relative transition duration-700 ease-in-out transform -translate-y-${translateAmount}`}
                >
                  <div className=" shadow-2xl w-full justify-center flex flex-col items-center text-prl3 ">
                    <div
                      className={`w-full bg-pattern4 bg-opacity-10 text-prl3 text-center text-primary rounded-t-md `}
                    >
                      <span >Top {badge.rank}</span>
                    </div>
                    <div
                      className={`w-full  text-center bg-prl3   py-1`}
                    >
                      <span className="mt-1 font-bold text-badge ">{badge.language}</span>
                    </div>
                    <div className="w-full text-center  bg-pattern3 rounded-b-md  pt-1 pb-3">
                      <span>{badge.location_name}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            disabled={translateAmount === 100}
            onClick={() => {
              setTranslateAmount((translateAmount + 50) % 150)
              // recreateBadgeArray()
            }}
            className="text-white disabled:text-gray-400 rounded-full my-2  transition ease-in-out duration-500 hover:bg-gray-600 p-2"
          >
            <DownIcon />
          </button>
          <div className="text-center text-xs m-2 bg-prl3 px-1 rounded-sm">
            Powered by <strong>Codersrank.io</strong>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
