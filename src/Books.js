import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

/**
 * Class representing a Books component.
 * @extends React.Component
 */
class Books extends React.Component {

  /**
   * Render view of this component.
   */
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

                  {/**
                   * Show only books from Currently Reading shelf
                   */}
                  {this.props.library.filter((el) => el.shelf === 'currentlyReading').map((el) =>
                  <li key={el.id}> {/* Set element id */}
                    <div className="book">
                      <div className="book-top">

                        {/**
                         * Show cover of books if exist
                         */}
                        {
                        el.imageLinks ?
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div> :
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(public/noimage.jpg)' }}></div>
                        }
                        <div className="book-shelf-changer">

                          {/**
                           * Set default value manually
                           * Update shelf event
                           */}
                          <select defaultValue="currentlyReading" onChange={e => this.props.updateShelf({id: el.id}, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>

                      {/**
                       * Show title of book if exist
                       */}
                      {el.title ?
                        <div className="book-title">{el.title}</div> :
                        <div className="book-title">No title available</div>
                      }

                      {/**
                       * Show authors of book if exist
                       */}
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {/**
                   * Show only books from Want To Read shelf (all actions repeat from above).
                   */}
                  {this.props.library.filter((el) => el.shelf === 'wantToRead').map((el) =>
                  <li key={el.id}>
                    <div className="book">
                      <div className="book-top">
                        {
                        el.imageLinks ?
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div> :
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(public/noimage.jpg)' }}></div>
                        }
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/**
                   * Show only books from Read shelf (all actions repeat from above).
                   */}
                  {this.props.library.filter((el) => el.shelf === 'read').map((el) =>
                  <li key={el.id}>
                    <div className="book">
                      <div className="book-top">
                        {
                        el.imageLinks ?
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${el.imageLinks.smallThumbnail})` }}></div> :
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(public/noimage.jpg)' }}></div>
                        }
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
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"></Link>

        </div>

      </div>
    )
  }
}

/** @module Books */
export default Books
