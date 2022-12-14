import React from "react"
import "./side.css"
import Heading from "../../../common/heading/Heading"
import Tpost from "../Tpost/Tpost"


//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  
  const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <>
      <Tpost />

      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>
      

      <section className='catgorys'>
        <Heading title='Categories' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
      <Heading title='Subscribe' />
      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>
    </>
  )
}

export default Side
