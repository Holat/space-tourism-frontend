import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
        <section className='home'>
            <div className='overlay'>
                <article>
                  <h4>SO, YOU WANT TO TRAVEL</h4>
                  <h1>SPACE</h1>
                  <p>
                  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                  </p>
                </article>

                <article className='hc'>
                  <button className='explore'>
                    <div className='hover'></div>
                    <Link to = "/destination">
                      Explore
                    </Link>
                  </button>
                </article>
            </div>
        </section>
    </>
  )
}

export default Home