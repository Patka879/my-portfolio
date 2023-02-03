import "./normalize.css"
import "./style.css"
import React from "react"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import WelcomePage from "./Components/WelcomePage"


export default function App() {

  return (
    <div className="app-container">
      <WelcomePage />
      <Navbar  />
      <Content />
    </div>
  )
}
