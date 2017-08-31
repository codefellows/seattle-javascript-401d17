import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.category ? {...props.category} : {title: ''}; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.category) {
      this.setState(props.category);
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});

    if (!this.props.category) {
      this.setState({ title: '' });
    }
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='project title'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;
