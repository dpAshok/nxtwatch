import ThemeAndVideoContext from '../context/ThemeAndVideoContext'
import './index.css'

const FailureView = props => {
  const {onRetry} = props
  const onclickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? 'color1' : 'color2'
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <div className="failureContainer">
            <img src={imageUrl} alt="failure view" />
            <div className="failureDetails">
              <h1 className={textColor}>Oops! Something Went Wrong</h1>
              <p className={textColor}>
                We are having som trouble to complete your request. Please try
                again
              </p>
              <button type="button" onClick={onclickRetry}>
                Retry
              </button>
            </div>
          </div>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
