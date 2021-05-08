import React from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListBooks = (props) => {

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {props.shelves.map((shelf,index) => (
                        <Shelf 
                          key={index} 
                          shelfName={shelf} 
                          books={props.books.filter(
                            (book)=>(book.shelf.toLowerCase()===shelf.replace(/\s/g, "").toLowerCase())
                            )}
                          updateBook={props.updateBook}
                          />))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
         ) }

         ListBooks.propTypes = {
          books: PropTypes.array.isRequired,
          shelves: PropTypes.array.isRequired,
          updateBook: PropTypes.func.isRequired
        }

export default ListBooks