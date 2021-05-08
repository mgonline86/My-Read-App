import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const  Shelf = (props) => {
    
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title" style={{
                                    textAlign: "center"
                                }}>{props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books.map((book)=>(
                  <Book key={book.id} book={book} updateBook={props.updateBook}/>
                ))}
                
              </ol>
            </div>
          </div>
         ) 

}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default  Shelf