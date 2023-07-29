import React, {useState} from 'react'

function Destination() {
  let dest = require('../starter-code/data.json');
  const [planets] = useState(dest.destinations)
  const [value, setValue] = useState(0)
  
  const {name, description, distance, travel} = planets[value]

  // console.log(images.png)
  return (
    <>
        <section className='destination'>
          <div className='cont'>
            <div className='destCont'>
              <h2 className='headerD'>
                <span>01</span>
                Pick you destination
              </h2>
              <img 
                src = {require(`../starter-code/assets/destination/image-${name}.png`)} alt = {name} 
                title={name}
                className= "planetImg"
              />
            </div>
            <article className='desc'>
              {
                planets.map((planet, index) => 
                <button 
                  key = {index} 
                  onClick={() => setValue(index)} 
                  className={`planetBtn  ${index === value && "activeP"}`}

                >{planet.name}</button>)
              }
              <h2>{name}</h2>
              <p>{description}</p>
              <ul>
                <li className='distance'>
                  <span>Avg. distance </span>
                  <span> {distance}</span>
                </li>
                <li className='distance'>
                  <span>Est. Travel Time </span>
                  <span> {travel}</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
    </>
  )
}

export default Destination