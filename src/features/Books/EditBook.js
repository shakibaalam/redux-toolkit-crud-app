import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation()
    const navigate = useNavigate();
    // console.log(location.state);
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateBook({ id, title, author }))
        navigate('/show')
    }
    return (
        <div>
            <h2 className=' text-2xl text-purple-500 font-bold mt-10'>Edit book.............</h2>

            <div className=' w-1/2 flex justify-center mx-auto my-10'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>

                    <div className='mb-4 flex'>
                        <label className=' text-gray-700 font-bold mr-2' htmlFor="title">Title:</label>

                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
                    </div>

                    <div className=' flex'>
                        <label className=' text-gray-700 font-bold mr-2' htmlFor="author">Author:</label>

                        <input className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="author" id="author" value={author} onChange={e => setAuthor(e.target.value)} required />
                    </div>

                    <button className='bg-sky-600 hover:bg-sky-700 rounded px-3 py-1 text-white mt-5' type='submit'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditBook;