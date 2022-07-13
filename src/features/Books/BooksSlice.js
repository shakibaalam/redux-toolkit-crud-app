import { createSlice } from "@reduxjs/toolkit"

const { v4: uuidv4 } = require('uuid');

const initialBooks = {
    books: [
        { id: uuidv4(), title: "Love Bangladesh", author: "Shakiba Alam" },
        { id: uuidv4(), title: "Bangladeshi people", author: "Shakiba Alam" },
    ]
}

export const BooksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: state => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload
            const existBook = state.books.filter(book => book.id === id)
            console.log(existBook);
            if (existBook) {
                existBook[0].title = title;
                existBook[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        },
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = BooksSlice.actions;

export default BooksSlice.reducer;