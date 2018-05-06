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
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={e => this.props.searchBook(e.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.props.searchResults.length === 0 ?
              'No results':
              this.props.searchResults.map((el) =>
              <li key={el.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
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
