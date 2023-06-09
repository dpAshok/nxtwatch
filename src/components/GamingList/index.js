import {Component} from 'react'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../context/ThemeAndVideoContext'

import GamingCard from '../GamingCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class GamingList extends Component {
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
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      Method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      if (data.videos.length === 0) {
        this.setState({apiStatus: apiStatusConstants.failure})
      } else {
        const updatedData = data.videos.map(eachMovie => ({
          id: eachMovie.id,
          title: eachMovie.title,
          thumbnailUrl: eachMovie.thumbnail_url,
          viewCount: eachMovie.view_count,
        }))
        this.setState({
          videosList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  videosShowList = Theme => {
    const {videosList} = this.state
    return (
      <ul className={`gamingVideos_list_container ${Theme}`}>
        {videosList.map(eachVideo => (
          <GamingCard eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </ul>
    )
  }

  loading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  onRetry = () => {
    this.getVideos()
  }

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
          const Theme = isDarkTheme ? 'dark' : 'light'

          return (
            <>
              <Link to="/gaming">
                <div className={`Gaming-page-container ${Theme}`}>
                  <div className={`gamingIconContainer ${Theme}`}>
                    <SiYoutubegaming className="icon" color="red" />

                    <p className={Theme}>Gaming</p>
                  </div>
                  <div className="gamingVideosContainer">
                    {this.renderHomeVideos(Theme)}
                  </div>
                </div>
              </Link>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default GamingList
