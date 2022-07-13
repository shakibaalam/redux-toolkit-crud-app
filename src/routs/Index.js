import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from '../features/Books/AddBook';
import BookView from '../features/Books/BookView';
import EditBook from '../features/Books/EditBook';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/show' element={<BookView></BookView>}></Route>
                <Route path='/add' element={<AddBook></AddBook>}></Route>
                <Route path='/edit' element={<EditBook></EditBook>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;