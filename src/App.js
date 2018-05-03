import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Books from './Books'
import Search from './Search'

const test = BooksAPI.getAll();
console.log(test.data);

class BooksApp extends React.Component {
  state = {
    library: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({
      library: data
    }))
  }

  render() {
    return (
      <div className="app">
        {this.state.library.map((el)=>el.title)}
        <Route exact path="/" render={()=>(
            <Books library={this.state.library}/>
          )}/>
        <Route path="/search" component={Search} />

      </div>
    )
  }
}

export default BooksApp
