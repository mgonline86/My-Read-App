import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  state={
    searchResult:[]
  }

  searchBooks = _.debounce(query =>{
    if (query==='') {
      this.setState(() => ({
        searchResult:[]
    }))
    }
    else{
      BooksAPI.search(query)
      .then((result) => {
        let searchResult = []
        // Check if the API returned Books
        Array.isArray(result) && (
          result.forEach((newBook) => (
            // Check if the book is already on shelf
            this.props.books.findIndex(book => book.id === newBook.id)!==-1?
            // Add Book data from props
            searchResult.push(this.props.books[this.props.books.findIndex(book => book.id === newBook.id)])
            // Add Book data from API
            : searchResult.push(newBook)
          ))
        )
        this.setState(() => ({
          searchResult
      }))
      })
    }
    
  }, 600)

   

    render() {
        return (
                <div className="search-books">
                  <div className="search-books-bar">
                  <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                      <input 
                        type="text" 
                        onChange={(event)=>this.searchBooks(event.target.value)} 
                        placeholder="Search by title or author" 
                        autoFocus 
                      />
                    </div>
                  </div>
                  <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.searchResult.map((book)=>(
                      <Book key={book.id} book={book} updateBook={this.props.updateBook}/>
                    ))}
                    </ol>
                  </div>
                </div>
         ) }

}