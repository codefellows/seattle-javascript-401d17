import './_settings-container.scss';
import React from 'react'
import {connect} from 'react-redux'
import ProfileForm from '../profile-form'
import {
  userProfileCreateRequest,
  userProfileUpdateRequest,
} from '../../action/profile-actions.js'

class SettingsContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleProfileCreate = this.handleProfileCreate.bind(this)
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this)
  }

  handleProfileCreate(userProfile){
    return this.props.userProfileCreate(userProfile)
    .then(() => {
      this.props.history.push('/dashboard')
    })
    .catch(console.error)
  }

  handleProfileUpdate(profile){
    return this.props.userProfileUpdate(profile)
    .catch(console.error)
  }

  render(){
    let handleComplete = this.props.userProfile
      ? this.handleProfileUpdate
      : this.handleProfileCreate

    return (
      <div className='settings-container'>
        <h2>tell us about yourself</h2>

        <ProfileForm
          profile={this.props.userProfile}
          buttonText='create profile'
          onComplete={handleComplete}
          />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfile
})

let mapDispatchToProps = (dispatch) => ({
  userProfileCreate: (userProfile) => dispatch(userProfileCreateRequest(userProfile)),
  userProfileUpdate: (userProfile) => dispatch(userProfileUpdateRequest(userProfile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
