import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Books from './Books'
import Search from './Search'
import Preloader from './Preloader'

/**
 * Class representing a BooksApp component.
 * @extends React.Component
 */
class BooksApp extends React.Component {

  /**
   * @property {object}  this.state            - The default values for state.
   * @property {array}   state.library         - The default array of library - my favorite books.
   * @property {array}   state.searchResults   - The default array of searching results.
   * @property {string}  state.preloader       - The default value of preloader - 'none' means hide it, 'block' means show it.
   */
  state = {
    library: [],
    searchResults: [],
    preloader: 'block'
  }

  /**
   * Show preloader.
   */
  showPreloader() {
    this.setState({
      preloader: 'block'
    });
  }

  /**
   * Show all books from my library.
   */
  viewBooks() {
    this.showPreloader();

    // Fetch my favorite books
    BooksAPI.getAll().then((data) => {
      // Update my library of favorite books and hide preloader
      this.setState({
        library: data,
        preloader: 'none'
      });
    })
  }

  /**
   * Search books and show results.
   */
  searchBook = (query) => {
    this.showPreloader();

    // Search for books
    BooksAPI.search(query).then((data) => {

      // Check conditions
      if(!data || data.error) {
          // If no results set searchResults array to empty
          this.setState({searchResults : []})
        } else {
          // If results set searchResults array to data from response
          this.setState({searchResults : data})
        }

        // Hide preloader
        this.setState({
          preloader: 'none'
        });
    })
    .catch(err => {
      console.log(err);
    })
  }

  /**
   * Update shelf and then show all books with updated shelfs.
   */
  updateShelf = (book, shelf) => {
    this.showPreloader();

    // Update shelf
    BooksAPI.update(book, shelf).then((data) => {

      // Show all books with updated shelfs
      this.viewBooks();
    })
  }

  /**
   * Show all books from my library when component is loaded.
   */
  componentDidMount() {
    this.viewBooks();
  }

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="app">

        {/**
         * Implement main route "/"
         * with preloader props in Preloader component,
         * library and updateShelf props in Books component,
         */}
        <Route exact path="/" render={()=>(
            <div>
              <Preloader preloader = {this.state.preloader}/>
              <Books
                library = {this.state.library}
                updateShelf = {this.updateShelf}
                />
            </div>
          )}/>

        {/**
         * Implement search route "/search"
         * with preloader props in Preloader component,
         * searchResults, searchBook, updateShelf and library props in Search component,
         * library and updateShelf props in Books component,
         */}
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

/** @module BooksApp */
export default BooksApp
