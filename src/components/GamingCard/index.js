import {NavLink} from 'react-router-dom'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'

import './index.css'

const GamingCard = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const cardColor = isDarkTheme ? 'darkColorCard' : 'lightColorCard'
      const textColor = isDarkTheme ? 'color1' : 'color2'
      const {eachVideo} = props
      const {title, viewCount, thumbnailUrl, id} = eachVideo
      return (
        <NavLink to={`/videos/${id}`}>
          <li className={`each_GamingVideoCard ${cardColor}`}>
            <img src={thumbnailUrl} alt={title} className="thumbnailImage" />
            <div className="GamingVideo_details">
              <h2 className={textColor}>{title}</h2>
              <div className="view_time">
                <span className={textColor}>{viewCount}</span>
                <span className={textColor}>watching worldwide</span>
              </div>
            </div>
          </li>
        </NavLink>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default GamingCard
