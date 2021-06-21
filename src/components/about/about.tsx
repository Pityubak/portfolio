import * as React from "react"
import MeIcon from "../../assets/me.svg"
import EmailIcon from "../../assets/email.svg"
import LocationIcon from "../../assets/location.svg"
import Circle from "./circle"

const skillsData = [
  {
    name: "Java",
    level: 55,
    color: "#F4D35E",
  },
  {
    name: "JavaScript",
    level: 40,
    color: "#7CB4B8",
  },
  {
    name: "ReactJS",
    level: 55,
    color: "#A9714B",
  },
  {
    name: "CSS",
    level: 75,
    color: "#E8985E",
  },
  {
    name: "SCSS",
    level: 60,
    color: "#5AAA95",
  },
  {
    name: "HTML",
    level: 85,
    color: "#86A873",
  },
  {
    name: "C#",
    level: 15,
    color: "#F4FAFF",
  },
  {
    name: "Docker",
    level: 5,
    color: "#DEE7E7",
  },
  {
    name: "Wordpress",
    level: 10,
    color: "#B7ADCF",
  },
  {
    name: "Material UI",
    level: 65,
    color: "#22AED1",
  },
  {
    name: "TailwindCSS",
    level: 40,
    color: "#AFA98D",
  },
  {
    name: "GraphQL",
    level: 35,
    color: "#EBBE9B",
  },
  {
    name: "Spring Boot",
    level: 20,
    color: "#8447FF",
  },
  {
    name: "React Redux ",
    level: 35,
    color: "#BFAE48",
  },
  {
    name: "Git",
    level: 50,
    color: "#5FAD41",
  },
]

const AboutMe = () => {
  return (
    <div className={`flex flex-1  items-center `}>
      <div className=" flex flex-1 w-full lg:h-136 flex-col items-center lg:overflow-y-auto  ">
        <div className=" w-full md:w-10/12 lg:w-9/12 md:px-10 sm:px-4 px-2 py-4 relative my-10  rounded-md">
          <h1 className="font-semibold text-center text-lg text-white mb-8 ">
            My skills
          </h1>
          <div className="flex flex-wrap w-full justify-around  items-center bg-white bg-opacity-10">
            {skillsData.map(skill => {
              return (
                <Circle
                  key={`skill-${skill?.name}`}
                  text={skill.name}
                  limit={skill.level}
                  color={skill.color}
                  radius={45}
                  stroke={8}
                />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  xl:h-72  my-8   shadow-2xl  ">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-64 lg:h-64 xl:w-72  xl:h-72 text-white cursor-pointer flex items-center justify-center relative ">
            <MeIcon />
            <div className=" flex p-4 items-center flex-col text-lg justify-center text-white opacity-0 hover:opacity-100 bg-pattern3 w-full h-full absolute transition duration-700 ease-in">
              <blockquote>
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.”
              </blockquote>
              <span className="font-semibold mt-2 text-yellow-500">
                – Martin Fowler
              </span>
            </div>
          </div>
          <div className="relative justify-center text-lg cursor-pointer  items-center flex-col flex text-white  w-80 h-80 md:w-96 md:h-96 lg:w-64 lg:h-64 xl:w-72  xl:h-72 px-4">
            <h1 className="font-semibold text-center  my-4">Hi there!</h1>
            <p className="text-center">
              I am Gyula Feigl, alias Pityubak with great interest in software
              development.
            </p>
            <div className=" flex p-4 items-center flex-col text-lg justify-center text-white opacity-0 hover:opacity-100 bg-pattern3 w-full h-full absolute transition duration-700 ease-in">
              <blockquote>
                “Code is like humor. When you have to explain it, it’s bad.”
              </blockquote>
              <span className="font-semibold mt-2 text-yellow-500">
                – Cory House
              </span>
            </div>
          </div>
          <div className=" relative flex flex-col cursor-pointer justify-center items-center p-4 w-80 h-80 md:w-96 md:h-96  lg:w-64 lg:h-64 xl:w-72  xl:h-72 text-lg  text-white ">
            <div className="flex items-center  p-2 my-4">
              <LocationIcon />
              <p className="ml-2">Eger, Hungary</p>
            </div>
            <div className="flex items-center  p-2 my-4">
              <EmailIcon />
              <p className="ml-2">idpityubak@gmail.com</p>
            </div>
            <div className=" flex p-4 items-center flex-col text-lg justify-center text-white opacity-0 hover:opacity-100 bg-pattern3 w-full h-full absolute transition duration-700 ease-in">
              <blockquote>“Talk is cheap. Show me the code.”</blockquote>
              <span className="font-semibold mt-2 text-yellow-500">
                – Linus Torvalds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
