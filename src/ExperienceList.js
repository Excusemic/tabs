import React, { useState } from "react"
import Request from "./Request"
import Experience from "./Experience"

const ExperienceList = () => {
  const [value, setValue] = useState(0)
  const data = Request()
  return (
    <div className="content">
      <h1>Experience</h1>
      <div className="underline"></div>
      {typeof data === "object" && data ? (
        <div className="experienceList">
          <ul className="tabs">
            {data.map((elem, index) => {
              return (
                <li
                  key={elem.id}
                  onClick={() => setValue(index)}
                  className={index === value ? "active" : ""}
                >
                  {elem.company}
                </li>
              )
            })}
          </ul>
          <div className="experience-text">
            <Experience {...data[value]} />
          </div>
        </div>
      ) : (
        data
      )}
    </div>
  )
}

export default ExperienceList
