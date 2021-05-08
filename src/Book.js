import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

export default class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
  }

    handleUpdateBook = (book,shelf) => {
      BooksAPI.update(book,shelf)
        .then(
        this.props.updateBook(book,shelf))
    }

    render() {
        return (
            <li>
                  <div className="book">
                    <div className="book-top">
                      <div 
                        className="book-cover" 
                        style={{
                            display:"table",
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url("${
                                // Does the book has an imageLinks
                                this.props.book.imageLinks?
                                // Add Image as Book Cover
                                this.props.book.imageLinks.thumbnail
                                :''}")` }}>
                                    {/* Create Book Cover Dynamically from its Title */
                                    this.props.book.imageLinks?''
                                    :<p
                                    style={{
                                        backgroundColor:"#4C0120",
                                        outline: "2px solid #DAA520",
                                        outlineColor:"linear-gradient(#47c465, #00deff)",
                                        outlineOffset: "-4px",
                                        color:"palegoldenrod",
                                        display:"table-cell",
                                        verticalAlign:"middle",
                                        textAlign:"center",
                                        cursor:"default",
                                        fontFamily:"serif",
                                        fontSize:"80%",
                                        padding:"10px"
                                    }}
                                    >{this.props.book.title}</p>}
                                </div>
                      <div className="book-shelf-changer">
                        <select 
                            defaultValue={this.props.book.shelf?this.props.book.shelf:'none'}
                            onChange={(e)=>this.handleUpdateBook(this.props.book,e.target.value)}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">
                      { // Does the book has authors?
                        this.props.book.authors?
                        // Show Authors
                        this.props.book.authors.map((author)=>(
                          <p 
                          style={{
                              margin:"0",
                              padding:"0"
                              }} 
                          key={author}
                          >
                            {author}
                          </p>))
                          // Show Nothing
                          :''
                        }
                      </div>
                  </div>
                </li>
         ) }

}