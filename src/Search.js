import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'

class Search extends React.Component {

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">home</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={e =>

                  this.props.searchBook(e.target.value)
              }/>

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.props.searchResults.error}
            {this.props.searchResults.length === 0 ?
              <h1>No results</h1>:
              this.props.searchResults.map((el) =>
              <li key={el.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select defaultValue="none" onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      </div>
                      </div>
              </li>
          )}
          </ol>

        </div>
      </div>
    )
  }
}

export default Search
