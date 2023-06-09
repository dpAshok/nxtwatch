import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <NavigationBar />
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

        return (
          <div className="notFoundContainer" style={{backgroundColor: bgColor}}>
            <img src={imageUrl} alt="not found" />
            <h1 style={{color: headingColor}}>Page Not Found</h1>
            <p style={{color: headingColor}}>
              We are sorry, the page you requested could not be found.
            </p>
          </div>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  </>
)
export default NotFound
