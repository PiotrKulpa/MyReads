import React from 'react'
import './App.css'

/**
 * Class representing a Preloader component.
 * @extends React.Component
 */
class Preloader extends React.Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="preloader" style={{display: this.props.preloader}}>
        <div className="preloader-inner">
          <p>Loading...</p>
          <img src={require('./icons/preloader.svg')} alt="preloader"/>
        </div>
      </div>

    )
  }
}

/** @module Preloader */
export default Preloader
