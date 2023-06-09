import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
// import FailureView from '../FailureView/index'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'

import Video from '../Video'
import './index.css'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class VideosList extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      Method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {
      const updatedData = data.videos.map(eachMovie => ({
        id: eachMovie.id,
        title: eachMovie.title,
        thumbnailUrl: eachMovie.thumbnail_url,
        name: eachMovie.channel.name,
        viewCount: eachMovie.view_count,
        publishedAt: eachMovie.published_at,
        profileImageUrl: eachMovie.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  videosShowList = Theme => {
    const {videosList} = this.state
    return videosList.length > 0 ? (
      <ul className={`video_list_container ${Theme}`}>
        {videosList.map(eachVideo => (
          <Video eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </ul>
    ) : (
      <div className="failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
      </div>
    )
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onEnter = e => {
    if (e.key === 'Enter') {
      this.getVideos()
    }
  }

  onSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  onSearchIconClick = () => {
    this.getVideos()
  }

  loading = () => (
    <div className="loader-container" data-testId="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  failure = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = Theme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.videosShowList(Theme)
      case apiStatusConstants.loading:
        return this.loading()
      case apiStatusConstants.failure:
        return this.failure()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    // const ClassName = isLight
    //   ? 'videos-page-container'
    //   : 'videos-page-container dark'
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const Theme = isDarkTheme ? 'dark' : 'light'

          return (
            <div className={`videos-page-container ${Theme}`}>
              <div className={`searchContainer ${Theme}`}>
                <input
                  type="search"
                  name="search"
                  placeholder="search"
                  onChange={this.onSearch}
                  onKeyDown={this.onEnter}
                  value={searchInput}
                  className={Theme}
                />
                <div className={`searchIcon ${Theme}`}>
                  <AiOutlineSearch onClick={this.onSearchIconClick} />
                </div>
              </div>
              <div className="videos_container">
                {this.renderHomeVideos(Theme)}
              </div>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideosList
