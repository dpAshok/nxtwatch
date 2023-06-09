import Header from '../Header/index'
import NavigationBar from '../NavigationBar/index'
import TrendingList from '../TrendingList/index'

import './index.css'

const Trending = () => (
  <>
    <Header />
    <div className="home-container">
      <NavigationBar />
      <TrendingList />
    </div>
  </>
)

export default Trending
