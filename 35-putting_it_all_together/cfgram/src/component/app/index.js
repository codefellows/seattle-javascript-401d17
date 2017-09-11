import './_app.scss'
import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Navbar from '../navbar'
import * as util from '../../lib/util.js'
import LandingContainer from '../landing-container'
import DashboardContainer from '../dashboard-container'
import SettingsContainer from '../settings-container'
import {tokenSet} from '../../action/auth-actions.js'
import {userProfileFetchRequest} from '../../action/profile-actions.js'


class App extends React.Component {
  componentDidMount(){
  }

  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route path='*' component={Navbar} />
            <Route exact path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/settings' component={SettingsContainer} />
            <Route exact path='/dashboard' component={DashboardContainer} />
            <Route exact path='/' component={DashboardContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
})

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
