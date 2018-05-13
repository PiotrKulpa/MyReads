import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Books from './Books'
import Search from './Search'
import Preloader from './Preloader'

class BooksApp extends React.Component {

   state = {
     library: [],
     searchResults: [],
     preloader: 'block'
   }

   showPreloader() {
     this.setState({
       preloader: 'block'
     });
   }

  viewBooks() {
    this.showPreloader();
    BooksAPI.getAll().then((data) => {
      this.setState({
        library: data,
        preloader: 'none'
      });
      console.log(data);
    })
  }

  searchBook = (query) => {
    this.showPreloader();
    BooksAPI.search(query).then((data) => {

      if(!data || data.error) {
          this.setState({searchResults : []})
        } else {
          this.setState({searchResults : data})
        }
        this.setState({
          preloader: 'none'
        });
        console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateShelf = (book, shelf) => {
    this.showPreloader();
    BooksAPI.update(book, shelf).then((data) => {
      this.viewBooks();
      console.log(data);
    })
  }

  componentDidMount() {
    this.viewBooks();
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={()=>(
            <div>
              <Preloader preloader = {this.state.preloader}/>
              <Books
                library = {this.state.library}
                updateShelf = {this.updateShelf}
                />
            </div>
          )}/>
        <Route path="/search" render={()=>(
            <div>
              <Preloader preloader = {this.state.preloader}/>
              <Search
              searchResults = {this.state.searchResults}
              searchBook = {this.searchBook}
              updateShelf = {this.updateShelf}
              library = {this.state.library}
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
