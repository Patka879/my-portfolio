import "./normalize.css"
import "./style.css"
import React from "react"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"


export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Content />
    </div>
  )
}
