import React from 'react'
import { projects } from './Data'

const Project = () => {
  return (
    <>
      <div className="our-services" id="projects">
        <h1>Workmen Rakhsha -<span>DMRC DE-04 Project Safety Guidelines</span></h1>
        <div className="main-service">

          {projects.map(({ cover, name, pdf }, i) => {
            return (
              <>

                <div key={i} className="inner-service">
                  <img src={cover} alt="DMRC" />
                  <h2>{name}</h2>
                  <a href={pdf} target='_blank' className="service-btn">Guidelines</a>
                </div>
              </>
            )
          })}
        </div>
      </div>


    </>
  )
}

export default Project