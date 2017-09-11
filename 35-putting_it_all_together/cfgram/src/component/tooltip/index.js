import './_tooltip.scss'
import React from 'react'
import * as util from '../../lib/util.js'

export default (props) => (
  <div className='tooltip'>
    <main>
    {util.renderIf(props.message && props.show, 
      <div>
        <p> {props.message} </p>
        <i className='fa fa-caret-down' />
      </div>
    )}
    </main>
  </div>
)
