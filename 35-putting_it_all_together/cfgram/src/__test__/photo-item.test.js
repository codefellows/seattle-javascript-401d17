import React from 'react'
import {mount} from 'enzyme'
import superagent from 'superagent'
import superagentMocker from 'superagent-mocker'
import appStoreCreate from '../lib/app-store-create.js'
import * as photoActions from '../action/photo-actions.js'
import ConnectedPhotoItem, {PhotoItem} from '../component/photo-item'

let mockAPI = superagentMocker(superagent)

let mockPhoto = {
  _id: 'lulwat',
  url: '/cool.jpg', 
  description: 'summer fun!', 
}

describe('PhotoItem', ()=> {
  test('inital state', () => {

    let wrapper = mount(<PhotoItem photo={mockPhoto}/>)
    expect(wrapper.state('editing')).toEqual(false)
  })

  test('click trash can should invoke photoDelete with this.props.photo', () => {
    let mockDeletePhoto = jest.fn(() => Promise.resolve())
    let wrapper = mount(<PhotoItem photo={mockPhoto} deletePhoto={mockDeletePhoto} />)
    wrapper.find('.fa-trash-o').simulate('click')
    expect(mockDeletePhoto).toHaveBeenCalledWith(mockPhoto)
  })

  test('click pencil hould invoke photoUpdate with this.props.photo', () => {
    let wrapper = mount(<PhotoItem photo={mockPhoto} />)
    wrapper.find('.fa-pencil').simulate('click')
    expect(wrapper.state('editing')).toEqual(true)
  })
})
