import {NavLink} from 'react-router-dom'
import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'

const SavedVideos = () => (
  <>
    <Header />
    <NavigationBar />
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        const cardColor = isDarkTheme ? 'darkColorCard' : 'lightColorCard'
        const textColor = isDarkTheme ? 'textDarkColor' : 'textLightColor'
        const Theme = isDarkTheme ? 'dark' : 'light'

        return (
          <div className={`savedContainer ${Theme}`}>
            <div className={`SavedIconContainer ${Theme}`}>
              <CgPlayListAdd className="icon" />
              <p className={textColor}>Saved Videos</p>
            </div>
            {savedVideos.length === 0 ? (
              <div className="noVideosContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <h1 className={textColor}>No saved videos found</h1>
                <p className={textColor}>
                  You can save your videos while watching them
                </p>
              </div>
            ) : (
              <div className="savedVideosListContainer">
                <ul className={`savedVideosListContainer ${Theme}`}>
                  {savedVideos.map(eachItem => {
                    const {
                      thumbnailUrl,
                      title,
                      name,
                      viewCount,
                      publishedAt,
                      profileImageUrl,
                      id,
                    } = eachItem
                    return (
                      <NavLink to={`/videos/${id}`}>
                        <li className={`each_SavedVideoCard ${cardColor}`}>
                          <img
                            src={thumbnailUrl}
                            alt={name}
                            className="thumbnailImage"
                          />
                          <div className="SavedVideo_details">
                            <img src={profileImageUrl} alt={name} />
                            <div>
                              <h2 className={`${textColor} title`}>{title}</h2>
                              <p className={`${textColor}`}>{name}</p>
                              <div className="view_time">
                                <span className={textColor}>{viewCount}</span>
                                <span className={textColor}>*</span>
                                <span className={textColor}>{publishedAt}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </NavLink>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  </>
)

export default SavedVideos
