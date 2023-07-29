import React, { useState } from 'react'

function Technology() {
  let tech = require('../starter-code/data.json');
  const [Tech] = useState(tech.technology)
  const [value, setValue] = useState(0)

  const {name, description} = Tech[value]
  return (
    <>
      <section className='technology'>
          <div className='cont'>
                <h2 className='headerD crewHeader'><span>03</span> Technology Page</h2>
              <div className='techImgs'>
                <img 
                  src = {require(`../starter-code/assets/technology/${name}-landscape.jpg`)} alt = {name} 
                  title={name}
                  className= "mobile techImg"
                />
                <img 
                  src = {require(`../starter-code/assets/technology/${name}-portrait.jpg`)} alt = {name} 
                  title={name}
                  className= "desktop techImg"
                />
              </div>
              <div className='techBtns'>
              {
                Tech.map((title, index) => 
                <button 
                  key = {index} 
                  onClick={() => setValue(index)} 
                  className={`techBtn ${index === value && "activeT"}`}
                >{index + 1}</button>)
              }
            </div>
          <article className='techCont'>
            <h2 className='terminal'>THE TERMINOLOGY...</h2>
            <h1 className='crewName techName'>{name}</h1>
            <p className='bio descT'>{description}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Technology