import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class TrendingList extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      Method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
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

  onRetry = () => {
    this.getVideos()
  }

  videosShowList = Theme => {
    const {videosList} = this.state
    return (
      <ul className={`Trending_video_list_container ${Theme}`}>
        {videosList.map(eachVideo => (
          <TrendingVideoCard eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </ul>
    )
  }

  loading = () => (
    <div className="loader-container" data-testid="loader">
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
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const textColor = isDarkTheme ? 'color1' : 'color2'
          const Theme = isDarkTheme ? 'dark' : 'light'

          return (
            <Link to="/trending">
              <div className={`Trending-page-container ${Theme}`}>
                <div className={`trendingIconContainer ${Theme}`}>
                  <HiFire className="icon" />
                  <p className={textColor}>Trending</p>
                </div>
                <div className="trendingVideosContainer">
                  {this.renderHomeVideos(Theme)}
                </div>
              </div>
            </Link>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingList
