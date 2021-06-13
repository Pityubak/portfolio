import * as React from "react"
import Card from "./card"
import View from "./view"
import Source from "./source"



const Projects = () => {
  return (
    <div className={`flex flex-1 items-center `}>
      {/* <Sidebar />  */}
      <div
        className=" flex flex-1 w-full lg:h-136 flex-col items-center overflow-auto "
      >
        <h1 className="font-semibold text-center text-lg text-prl3 my-8 ">
          My projects
        </h1>
        <Card
          chips={["Gatsby", "React Redux", "MDB React", "styled-components"]}
          web
          title="elszamolas2000bt.hu"
          description="Static website of a local(Eger, Hungary) accounting firm with an accounting fee calculator. "
          links={
            <div className="flex w-full items-center justify-center">
              <View href="https://elszamolas2000bt.hu" text="View" />
            </div>
          }
        />
        <Card
          chips={["Java 8", "Reflection", "Annotation"]}
          title="Liberator"
          links={
            <div className="flex w-full items-center justify-center">
              <Source href="https://github.com/Pityubak/Liberator" />
            </div>
          }
          description="Java injection tool to help you create custom  annotation libraries, but there is still a lot of work to be done. "
        />
        <Card
          chips={[
            "Gatsby",
            "React Redux",
            "Material UI",
            "styled-components",
            "Leaflet",
          ]}
          web
          title="jrtech.hu"
          links={
            <div className="flex w-full items-center justify-center">
              <View href="https://jrtech.hu" text="View" />
            </div>
          }
          description="Static website of Jobbik Richárd (sole proprietor) and his company. He provides ventilation technology, implementation and metal industry production services. "
        />
        <Card
          chips={["C#", "WinApi", "WinForms"]}
          title="PityuTool.UI"
          links={
            <div className="flex w-full items-center  justify-center">
              <View
                href="https://www.nuget.org/packages/PityuTool.UI/"
                text="View"
              />
              <Source href="https://github.com/Pityubak/PityuTool.UI" />
            </div>
          }
          description="This component  adds some extra features to borderless WinForms, such as: resize, shadow."
        />
        <Card
          chips={[
            "Gatsby",
            "React Redux",
            "Material UI",
            "styled-components",
            "Spring Boot",
            "GraphQL",
            "Apollo",
            "JPA",
            "PostgreSQL",
            "Lombok",
            "amCharts4",
          ]}
          web
          links={
            <div className="flex w-full items-center  justify-center">
              <View href="http://leaders-of-the-world.surge.sh/" text="Demo" />
              <Source href="https://github.com/Pityubak/leaders-of-the-world" />
            </div>
          }
          title="leaders-of-worlds"
          description="You can add leaders to map of the world. Note: Due to the free subscription, the first query takes more time than usual, so be patient."
        />
        <Card
          chips={["Liberator", "Xml", "Serialization"]}
          title="XmlGrinder"
          links={
            <div className="flex w-full items-center  justify-center">
              <Source href="https://github.com/Pityubak/XmlGrinder" />
            </div>
          }
          description="You can use this tool to serialize any class to xml and vice versa. Based on Liberator."
        />
        <Card
          web
          chips={[
            "Gatsby",
            "React Redux",
            "styled-components",
            "GraphQL",
            "Apollo",
            "Wordpress",
            "Woocommerce",
          ]}
          links={
            <div className="flex w-full items-center  justify-center">
              <View
                href="http://fantastic-fashion-test.surge.sh/"
                text="Demo"
              />
            </div>
          }
          title="Fantastic Fashion"
          description="Woocommerce based webshop demo with GraphQL, authentication. Note: Due to the free subscription, the first query takes more time than usual, so be patient."
        />
        <Card
          chips={["Annotation Processor", "Pojo"]}
          links={
            <div className="flex w-full items-center  justify-center">
              <Source href="https://github.com/Pityubak/PojoGenerator" />
            </div>
          }
          title="PojoGenerator"
          description="Annotation processor, which creates getter,setter and constructor, here my goal was a deeper understanding and learning."
        />
      </div>
    </div>
  )
}

export default Projects
