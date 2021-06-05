import * as React from "react"
import useInterval from "../hooks/useInterval"

interface CircleProps {
  radius: number
  color: string
  stroke: number
  limit: number
  text?: string
}
const Circle = ({ radius, color, stroke, limit, text }: CircleProps) => {
  const [progress, setProgress] = React.useState(0)

  // useInterval(() => {
  //   if (progress !== limit) {
  //     setProgress(progress + 5)
  //   }
  // }, 80)
  React.useEffect(() => {
    setTimeout(() => {
      if (progress !== limit) {
        setProgress(() => progress + 5)
      }
    }, 80)
  }, [progress])

  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference
  return (
    <div className="flex flex-col items-center text-prl3 p-2 m-2">
      <svg height={radius * 2} width={radius * 2}>
        <g>
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <text x="50%" y="50%" textAnchor="middle" fill="#D3D5D4" dy=".3em">
            {limit}%
          </text>
        </g>
      </svg>
      <span>{text}</span>
    </div>
  )
}

export default Circle
