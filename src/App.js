import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: ['Currently Reading','Want to Read','Read']
  }
 
  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
      }))
      })
  }

  updateBooks=(bookToUpdate,newShelf)=>{ 
    // Is the book already on a shelf ?
    let isExistingBook = this.state.books.some((book) => bookToUpdate.id === book.id)

    if (isExistingBook) {
      // Change the shelf of the existing book:
      this.setState((prevState) => ({
        books: prevState.books.map((book)=>book.id===bookToUpdate.id?{...book, shelf:newShelf}:book)
    }))
    } else {
      // Add the new book to the shelf
      this.setState((prevState) => ({
        books: [...prevState.books,{...bookToUpdate,shelf:newShelf}]
    }))
    }
  }

  render() {
    return (
     
      <div className="app">
          <Route exact path='/' render={()=>(
            <ListBooks
              books={this.state.books}
              shelves={this.state.shelves}
              updateBook={this.updateBooks}
            />
          )} />

          <Route path='/search' render={()=>(
            <SearchBooks
            books={this.state.books}
            updateBook={this.updateBooks}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
