import React from 'react'
import "./maincontainer.css"
import MainContent from "./../MainContent/page"
import SideMenu from "./../SideMenu/page"

export default function Container() {
  return (
    <div className="main-container">
      <div className="main-content">
        <MainContent />
      </div>
      <div className="side-menu">
        <SideMenu />
      </div>
    </div>
  )
}
