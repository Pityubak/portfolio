import * as React from "react"
import ReactWordcloud, { MinMaxPair, Optional, Options } from "react-wordcloud"

import useWindowSize from "../hooks/useWindowSize"
import Sidebar from "../layout/sidebar"

const words = [
  {
    text: "Java",
    value: 200,
  },
  {
    text: "JavaScript",
    value: 100,
  },
  {
    text: "React",
    value: 120,
  },
  {
    text: "OOP",
    value: 90,
  },
  {
    text: "S.O.L.I.D",
    value: 65,
  },
  {
    text: "Spring",
    value: 80,
  },
  {
    text: "HTML",
    value: 100,
  },
  {
    text: "GraphQL",
    value: 75,
  },
  {
    text: "CSS",
    value: 100,
  },
  {
    text: "SCSS",
    value: 110,
  },
  {
    text: "React Redux",
    value: 60,
  },
  {
    text: "Docker",
    value: 40,
  },
  {
    text: "TypeScript",
    value: 40,
  },
  {
    text: "Material UI",
    value: 90,
  },
  {
    text: "TailwindCSS",
    value: 70,
  },
  {
    text: "PostgreSQL",
    value: 40,
  },
  {
    text: "MySQL",
    value: 40,
  },
  {
    text: "MongoDB",
    value: 40,
  },
  {
    text: "C#",
    value: 60,
  },
  {
    text: "Wordpress",
    value: 30,
  },
  {
    text: "Git",
    value: 100,
  },
  {
    text: "Apollo Client",
    value: 60,
  },
  {
    text: "Axios",
    value: 50,
  },
  {
    text: "Rest",
    value: 80,
  },
  {
    text: "Design Patterns",
    value: 80,
  },
  {
    text: "GatsbyJS",
    value: 100,
  },
  {
    text: "Visual Studio Code",
    value: 80,
  },
  {
    text: "Netbeans",
    value: 80,
  },
  {
    text: "STS4",
    value: 50,
  },
]

const options: Optional<Options> = {
  fontFamily: "courier new",
  fontSizes: [20, 50],
  colors: ["#048A81", "#9D44B5", "#C3423F", "#FCA311", "#3B60E4", "#1C7C54"],
  enableTooltip: false,
  rotations: 2,
  rotationAngles: [-90, 0],
}

const Home = () => {
  const { width, height } = useWindowSize()
  const size: MinMaxPair = [width * 0.6 - 300, height * 0.6 - 200]

  return (
    <div
      className={`flex flex-col lg:flex-row  lg:h-136 h-full items-center  flex-1 `}
    >
      <Sidebar />

      {width > 768 && (
        <div className="lg:my-0 my-12 hidden md:flex lg:m-0 m-4 flex-1 lg:h-full justify-center items-center ">
          <div>
            <ReactWordcloud words={words} size={size} options={options} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
