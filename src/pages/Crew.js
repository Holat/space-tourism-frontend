import React, {useState} from 'react'

function Crew() {
  let crew = require('../starter-code/data.json');
  const [Crew] = useState(crew.crew)
  const [value, setValue] = useState(0)

  const {name, role, bio} = Crew[value]

  return (
    <>
        <section className='crew'>
          <div className='cont crewCont'>
              <h2 className='headerD crewHeader'><span>02</span> Meet Your Crew</h2>
            <div className='imgCont'>
              <img 
                src = {require(`../starter-code/assets/crew/${name}.png`)} alt = {name} 
                title={name}
                className= "crewImg"
              />
            </div>
            <div className='btnCont'>
              {
              Crew.map((cast, index) => 
                <button 
                  key = {index} 
                  onClick={() => setValue(index)} 
                  className={`crewBtn  ${index === value && "activeC"}`}
                ></button>)
              }
            </div>
            <article className='crewDsc'>
              <h2 className='role'>{role}</h2>
              <h1 className='crewName'>{name}</h1>
              <p className='bio'>{bio}</p>
            </article>
            </div>
        </section>
    </>
  )
}

export default Crew