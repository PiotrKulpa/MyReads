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
            {this.props.searchResults.length === 0 ?
              <h1>No results</h1>:
              this.props.searchResults.filter((el) => !this.props.library.map((el) => el.id).includes(el.id)).map((el) =>
              <li key={el.id}>
                <div className="book">
                  <div className="book-top">
                    {el.imageLinks ?
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div> :
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(public/noimage.jpg)' }}></div>
                    }
                      <div className="book-shelf-changer">
                        <select defaultValue="none" onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
                          <option value="moveto" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      </div>
                      {el.title ?
                        <div className="book-title">{el.title}</div> :
                        <div className="book-title">No title available</div>
                      }
                      {el.authors ?
                        <div className="book-authors">{el.authors.toString().replace(/,/g, ', ')}</div> :
                        <div className="book-authors">No author available</div>
                      }

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
