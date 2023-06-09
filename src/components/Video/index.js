import {NavLink} from 'react-router-dom'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'

import './index.css'

const Video = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const cardColor = isDarkTheme ? 'darkColorCard' : 'lightColorCard'
      const textcolor = isDarkTheme ? 'color1' : 'color2'

      const {eachVideo} = props
      const {
        title,
        thumbnailUrl,
        name,
        profileImageUrl,
        viewCount,
        publishedAt,
        id,
      } = eachVideo

      return (
        <NavLink to={`/videos/${id}`}>
          <li className={`each_videoCard ${cardColor}`}>
            <img src={thumbnailUrl} alt={name} />
            <div className="video_details">
              <img src={profileImageUrl} alt={name} />
              <div>
                <h2 className={textcolor}>{title}</h2>

                <p className={textcolor}> {name}</p>
                <div className="view_time">
                  <span className={textcolor}>{viewCount}</span>
                  <span className={textcolor}>*</span>
                  <span className={textcolor}>{publishedAt}</span>
                </div>
              </div>
            </div>
          </li>
        </NavLink>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default Video
