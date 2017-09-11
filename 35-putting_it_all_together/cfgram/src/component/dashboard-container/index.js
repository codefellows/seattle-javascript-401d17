import './_dashboard-container.scss'
import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as photoActions from '../../action/photo-actions.js'

import PhotoForm from '../photo-form'
import PhotoItem from '../photo-item'

class DashboardContainer extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.userPhotosFetch()
    .catch(util.logError)
  }

  render(){
    return (
      <div className='dashboard-container'>
        <h2>dashboard</h2>
        <PhotoForm
          buttonText='post'
          onComplete={(photo) =>{
            return this.props.userPhotoCreate(photo)
            .catch(console.error)
          }}
            />
        {this.props.userPhotos.map(photo =>
          <PhotoItem key={photo._id} photo={photo} />
        )}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  userPhotos: state.userPhotos,
})

let mapDispatchToProps = (dispatch) => ({
  userPhotoCreate: (photo) => dispatch(photoActions.userPhotoCreateRequest(photo)),
  userPhotosFetch: (photos) => dispatch(photoActions.userPhotosFetchRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer)
