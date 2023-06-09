import Header from '../Header/index'
import NavigationBar from '../NavigationBar/index'
import VideosList from '../VideosList/index'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <NavigationBar />
      <VideosList />
    </div>
  </>
)

export default Home
