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

  viewBooks() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        library: data
      });
      console.log(data);
    })
  }

  updateShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((data) => {
      console.log(data);
      //this.viewBooks();
    })
  }

  componentDidMount() {
    this.viewBooks();
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={()=>(
            <Books
              library={this.state.library}
              updateShelf = {this.updateShelf}
              />
          )}/>
        <Route path="/search" component={Search} />

      </div>
    )
  }
}

export default BooksApp
