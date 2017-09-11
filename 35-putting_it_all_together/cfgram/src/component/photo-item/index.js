import React from 'react'
import {connect} from 'react-redux'

import PhotoForm from '../photo-form'
import * as util from '../../lib/util.js'
import * as photoActions from '../../action/photo-actions.js'

export class PhotoItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      editing: false
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleDelete(){
    return this.props.deletePhoto(this.props.photo)
    .then(console.log)
    .catch(console.error)
  }

  handleUpdate(photo){
    return this.props.updatePhoto(photo)
    .then(() => {
      this.setState({editing: false})
    })
    .catch(console.error)
  }


  render(){
    let {photo} = this.props
    return ( 
      <div>
        {util.renderIf(!this.state.editing, 
          <div>
            <img src={photo.url} />
            <p> {photo.description} </p>
            <i onClick={this.handleDelete} className='fa fa-trash-o fa-3x' />
            <i onClick={() => this.setState({editing: true})} className='fa fa-pencil fa-3x' />
          </div>
        )}

        {util.renderIf(this.state.editing, 
          <div>
            <PhotoForm
              photo={this.props.photo}
              buttonText='update photo'
              onComplete={this.handleUpdate}
              /> 
          </div>
        )}
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => ({
  deletePhoto: (photo) => dispatch(photoActions.userPhotoDeleteRequest(photo)),
  updatePhoto: (photo) => dispatch(photoActions.userPhotoUpdateRequest(photo)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoItem)
