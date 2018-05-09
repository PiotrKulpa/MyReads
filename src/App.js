import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Books from './Books'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    library: [],
    searchResults: []
  }

  empty = []

  viewBooks() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        library: data
      });
      console.log(data);
    })
  }

  searchBook = (query) => {
    BooksAPI.search(query).then((data) => {

      if(!data || data.error) {
          this.setState({searchResults : []})
        } else {
          this.setState({searchResults : data})
        }

        console.log(data);

    })
    .catch(err => {
      console.log(err);
    })
  }

  updateShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((data) => {
      console.log(data);
      //this.viewBooks();
      window.location.reload();
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
              library = {this.state.library}
              updateShelf = {this.updateShelf}
              />
          )}/>
        <Route path="/search" render={()=>(
            <div>
              <Search
              searchResults = {this.state.searchResults}
              searchBook = {this.searchBook}
              updateShelf = {this.updateShelf}
              />

              <Books
                library = {this.state.library}
                updateShelf = {this.updateShelf}
                />
              </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
