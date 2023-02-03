import "./normalize.css"
import "./style.css"
import React from "react"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import WelcomePage from "./Components/WelcomePage"
import Footer from "./Components/Footer"


export default function App() {

  return (
    <div className="app-container">
      <WelcomePage />
      <Navbar  />
      <Content />
      <Footer />
    </div>
  )
}
