import './_profile-form.scss'
import React from 'react'
import * as util from '../../lib/util.js'

class ProfileForm extends React.Component {
  constructor(props){
    super(props)

    console.log('props', props)
    this.state = props.profile                  // passed in only if updateing
      ? {...props.profile, preview: ''}         // inital state on update
      : { bio: '', avatar: null, preview: '' }  // inital state for createing a profile

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile)
  }

  handleChange(e){
    let {type, name} = e.target

    if(name === 'bio'){
      this.setState({bio: e.target.value})
    }

    if(name === 'avatar'){
      let {files} = e.target
      let avatar = files[0]
      this.setState({avatar})
      util.photoToDataURL(avatar)
      .then(preview => this.setState({preview}))
      .catch(console.error)
    }
  }

  handleSubmit(e){
    e.preventDefault()
    return this.props.onComplete(this.state)

  }

  render(){
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit} >

        <img src={this.state.preview || this.state.avatar } />

        <input
          type='file'
          name='avatar'
          onChange={this.handleChange}
          />

        <textarea
          type='text'
          name='bio'
          placeholder='tell us about yourself...'
          value={this.state.bio}
          onChange={this.handleChange}>
        </textarea>

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default ProfileForm
