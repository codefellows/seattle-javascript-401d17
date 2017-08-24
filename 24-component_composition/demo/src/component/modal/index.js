import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <button onClick={this.props.close}>X</button>
        <main>
          {this.props.children}
        </main>
      </section>
    )
  }
}

export default Modal;
