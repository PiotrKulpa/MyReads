import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'

class Books extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.library.filter((el) => el.shelf === 'currentlyReading').map((el) =>
                  <li key={el.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue="currentlyReading" onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{el.title}</div>
                      <div className="book-authors">{el.authors.toString().replace(/,/g, ', ')}</div>
                    </div>
                  </li>
                )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.library.filter((el) => el.shelf === 'wantToRead').map((el) =>
                  <li key={el.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue="wantToRead" onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{el.title}</div>
                      <div className="book-authors">{el.authors.toString().replace(/,/g, ', ')}</div>
                    </div>
                  </li>
                )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.library.filter((el) => el.shelf === 'read').map((el) =>
                  <li key={el.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue="read" onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{el.title}</div>
                      <div className="book-authors">{el.authors.toString().replace(/,/g, ', ')}</div>
                    </div>
                  </li>
                )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"></Link>

        </div>

      </div>
    )
  }
}

export default Books
