import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './BooksSlice';

const BookView = () => {
    const books = useSelector(state => state.booksReducer.books)
    // console.log(books);
    const dispatch = useDispatch()
    const handleDelete = id => {
        dispatch(deleteBook(id))
    }
    return (
        <div >
            <h2 className=' text-2xl text-purple-500 font-bold mt-10'>List of books.............</h2>

            <div className=' flex justify-center my-10'>
                <table className='border-separate border-spacing-2 border border-slate-500 bg-slate-200'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 bg-slate-300'>Id</th>
                            <th className='border border-slate-600 bg-slate-300'>Title</th>
                            <th className='border border-slate-600 bg-slate-300'>Author</th>
                            <th className='border border-slate-600 bg-slate-300'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => <tr key={book.id}>
                            <td className='border border-slate-700 p-4 '>{book.id}</td>
                            <td className='border border-slate-700 p-4 '>{book.title}</td>
                            <td className='border border-slate-700 p-4 '>{book.author}</td>
                            <td className='border border-slate-700 p-4 '>
                                <Link to='/edit' state={book}>
                                    <button className='bg-sky-600 hover:bg-sky-700 rounded px-3 py-1 text-white mr-2'>Edit</button>
                                </Link>

                                <button className='bg-sky-600 hover:bg-sky-700 rounded px-3 py-1 text-white mr-2' onClick={() => handleDelete(book.id)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookView;