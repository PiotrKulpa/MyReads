import React from 'react'
import './App.css'

class Preloader extends React.Component {

  render() {
    return (
      <div className="preloader" style={{display: this.props.preloader}}>
        <p>Loading...</p>
        <img src={require('./icons/preloader.svg')} alt="preloader"/>
      </div>

    )
  }
}

export default Preloader
