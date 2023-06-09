import ReactPlayer from 'react-player'
import {AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus, BiLike} from 'react-icons/bi'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'

const ViewVideo = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const {
    title,
    videoUrl,
    viewCount,
    publishedAt,
    description,
    name,
    profileImageUrl,
    subscriberCount,
  } = videoDetails

  const onClickLike = () => {
    clickLiked(isLiked)
  }

  const onClickDisLike = () => {
    clickDisLiked(isDisLiked)
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const Theme = isDarkTheme ? 'dark' : 'light'
        const textColor = isDarkTheme ? 'color1' : 'color2'

        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        let isSaved
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        return (
          <>
            <div className={`videoDetails ${Theme}`}>
              <div className="player">
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <h1 className={textColor}>{title}</h1>
              <div className="details">
                <div className="viewsContainer">
                  <span className={textColor}>{viewCount} views</span>
                  <span>{publishedAt}</span>
                </div>
                <div className="likesDislikesSaveContainer">
                  <div className="iconContainer">
                    <BiLike size={25} onClick={onClickLike} Color="red" />
                    <span className={textColor}>
                      {isLiked ? 'liked' : 'like'}
                    </span>
                  </div>
                  <div className="iconContainer">
                    <AiOutlineDislike
                      size={25}
                      onClick={onClickDisLike}
                      color={dislikeIconColor}
                    />
                    <span className={textColor}>
                      {isDisLiked ? 'Disliked' : 'Dislike'}
                    </span>
                  </div>
                  <div className="iconContainer">
                    <BiListPlus size={25} onClick={onClickSave} />
                    <span className={textColor}>
                      {isSaved ? 'Saved' : 'Save'}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="channel">
                <img src={profileImageUrl} alt={name} />
                <div className="channelDetails">
                  <h2 className={textColor}>{name}</h2>
                  <h5 className={textColor}>{subscriberCount}subscribers</h5>
                  <p className={textColor}>{description}</p>
                </div>
              </div>
            </div>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default ViewVideo
