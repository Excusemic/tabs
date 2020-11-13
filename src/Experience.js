import React from "react"
import { BsChevronDoubleRight } from "react-icons/bs"

const Experience = (props) => {
  const { title, dates, duties, company } = props
  return (
    <div>
      <h2>{title}</h2>
      <h4>{company}</h4>
      <h6>{dates}</h6>
      {duties.map((dutie, index) => {
        return (
          <div className="desc" key={index}>
            <BsChevronDoubleRight className="arrow"></BsChevronDoubleRight>
            <p>{dutie}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Experience
