import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    visibility: false,
    showErrorText: false,
    errMsg: '',
  }

  showPassword = () => {
    this.setState(prevState => ({visibility: !prevState.visibility}))
  }

  handleUsername = event => {
    this.setState({username: event.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  Submit = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'Post', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const data = await response.json()
    try {
      if (response.ok) {
        this.onSuccess(data.jwt_token)
      } else {
        this.setState({showErrorText: true, errMsg: data.error_msg})
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {username, password, errMsg, visibility, showErrorText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="bg-container">
          <form className="form-card" onSubmit={this.Submit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <div className="input-field">
              <label htmlFor="username">USERNAME</label>
              <br />
              <input
                type="text"
                id="username"
                placeholder="enter your username"
                name="username"
                value={username}
                onChange={this.handleUsername}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                type={visibility ? 'text' : 'password'}
                id="password"
                placeholder="enter your password"
                name="password"
                value={password}
                onChange={this.handlePassword}
              />
            </div>
            <div className="checkbox-filed">
              <input
                id="checkbox"
                type="checkbox"
                name="checkbox"
                onChange={this.showPassword}
              />
              <label htmlFor="checkbox">Show Password</label>
            </div>
            <button type="submit" className="button">
              Login
            </button>
            {showErrorText && <p className="errorMsg">*{errMsg}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default Login

// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

// import './index.css'

// class LoginRoute extends Component {
//   state = {username: '', password: '', errorMsg: '', isError: false}

//   usernameInput = event => {
//     this.setState({username: event.target.value})
//   }

//   userPasswordInput = event => {
//     this.setState({password: event.target.value})
//   }

//   successLogin = jwtToken => {
//     const {history} = this.props
//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     history.replace('/')
//   }

//   onSubmitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.successLogin(data.jwt_token)
//     } else {
//       this.setState({isError: true, errorMsg: data.error_msg})
//       console.log(userDetails)
//     }
//   }

//   render() {
//     const {username, password, errorMsg, isError} = this.state
//     const jwtToken = Cookies.get('jwt_token')

//     if (jwtToken !== undefined) {
//       return <Redirect to="/" />
//     }
//     return (
//       <div className="login-container">
//         <form className="form-container" onSubmit={this.onSubmitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//             alt="website logo"
//             className="logo-size"
//           />
//           <div className="input-container">
//             <label htmlFor="username">USERNAME</label>
//             <input
//               value={username}
//               placeholder="Username"
//               id="username"
//               type="text"
//               className="input-style"
//               onChange={this.usernameInput}
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="password">PASSWORD</label>
//             <input
//               value={password}
//               placeholder="Password"
//               id="password"
//               type="password"
//               className="input-style"
//               onChange={this.userPasswordInput}
//             />
//           </div>
//           <button type="submit" className="login-btn">
//             Login
//           </button>
//           {isError && <p className="error-msg">*{errorMsg}</p>}
//         </form>
//       </div>
//     )
//   }
// }
// export default LoginRoute
