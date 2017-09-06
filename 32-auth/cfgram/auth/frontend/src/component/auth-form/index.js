import React from 'react';
import * as util from '../../lib/util.js';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'username required' : null,
      emailError: name === 'email' && !value ? 'email required' : null,
      passwordError: name === 'password' && !value ? 'password required' : null
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
    .then(() => {
      this.setState({ username: '', email: '', password: ''})
    })
    .catch(error => {
      console.error(error);
      this.setState({error});
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='user-form'>

        {util.renderIf(this.props.auth === 'signup',
          <input
            type='text'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange} />
         )}

        {util.renderIf(this.state.usernameError,
          <span className='tooltip'>
            {this.state.usernameError}
          </span>
        )}

        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange} />

        {util.renderIf(this.state.passwordError,
          <span className='tooltip'>
            {this.state.passwordError}
          </span>
        )}

        <input
          type='password'
          name='password'
          placeholder='enter pw'
          value={this.state.password}
          onChange={this.handleChange} />

        <button type='submit'>{this.props.auth}</button>
      </form>
    )
  }
}

export default AuthForm;
