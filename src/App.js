import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Books from './Books'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    library: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        library: data
      });
      console.log(data);
    })

  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={()=>(
            <Books library={this.state.library}/>
          )}/>
        <Route path="/search" component={Search} />

      </div>
    )
  }
}

export default BooksApp
