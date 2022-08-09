import React from "react"
import Footer from "../common/footer/Footer"
import Navbar from "../common/navbar/Navbar"
import Hero from "./hero/Hero"
import Homes from "./mainContent/homes/Home"

const Homepages = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Homes />
      <Footer />
    </>
  )
}

export default Homepages
