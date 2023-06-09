import Header from '../Header/index'
import NavigationBar from '../NavigationBar/index'
import GamingList from '../GamingList/index'

import './index.css'

const Gaming = () => (
  <>
    <Header />
    <div className="home-container">
      <NavigationBar />
      <GamingList />
    </div>
  </>
)

export default Gaming
