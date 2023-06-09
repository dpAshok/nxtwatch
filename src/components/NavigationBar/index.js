import {NavLink} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const className = isDarkTheme ? 'dark' : 'light'
      const textColor = isDarkTheme ? 'darkColor' : 'lightColor'
      const mobileNavigationColors = isDarkTheme ? '#212121' : '#fff'

      return (
        <>
          <div className={`navigation-container ${className}`}>
            <ul className="list-item-container">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="Link"
                  activeClassName="active-link"
                >
                  <AiFillHome size={25} className="icon" />
                  <p className={`${textColor}`}>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trending"
                  className="Link"
                  activeClassName="active-link"
                >
                  <HiFire size={25} className="icon" />
                  <p className={`${textColor}`}>Trending</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gaming"
                  className="Link"
                  activeClassName="active-link"
                >
                  <SiYoutubegaming size={25} />
                  <p className={`${textColor}`}>Gaming</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saved-videos"
                  className="Link"
                  activeClassName="active-link"
                >
                  <CgPlayListAdd size={25} />
                  <p className={`${textColor}`}>Saved videos</p>
                </NavLink>
              </li>
            </ul>
            <div className="contact-container">
              <h3 className={`${textColor}`}>CONTACT US</h3>
              <iconContainer>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="facebook logo"
                />
              </iconContainer>
              <p className={`${textColor}`}>
                Enjoy! Now see your channels and recommendations
              </p>
            </div>
          </div>
          <div
            className="mobile-navigation"
            style={{backgroundColor: mobileNavigationColors}}
          >
            <NavLink
              exact
              to="/"
              className="Link"
              activeClassName="actives-link"
            >
              <AiFillHome className="icons" />
            </NavLink>
            <NavLink
              exact
              to="/trending"
              className="Link"
              activeClassName="actives-link"
            >
              <HiFire className="icons" />
            </NavLink>
            <NavLink
              exact
              to="/gaming"
              className="Link"
              activeClassName="actives-link"
            >
              <SiYoutubegaming className="icons" />
            </NavLink>
            <NavLink
              exact
              to="/saved-videos"
              className="Link"
              activeClassName="actives-link"
            >
              <CgPlayListAdd className="icons" />
            </NavLink>
          </div>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
