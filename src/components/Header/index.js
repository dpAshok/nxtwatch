import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const handleLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const mobileNavigationColors = isDarkTheme ? '#212121' : '#fff'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <>
          <div
            className="Header-container"
            style={{backgroundColor: mobileNavigationColors}}
          >
            <img src={websiteLogo} alt="website logo" />
            <div className="profile-details-container">
              {isDarkTheme ? (
                <BsBrightnessHigh size={25} onClick={onClickChangeTheme} />
              ) : (
                <BsMoon size={25} onClick={onClickChangeTheme} />
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="Profile"
              />
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
