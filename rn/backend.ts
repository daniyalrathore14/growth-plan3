require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const app = express();
const URI = process.env.MONGODB_URI

mongoose.connect(URI)
const database = mongoose.connection

database.on('err', (err) =&gt; {
    console.log(err)
})

database.once('connected',
    () =&gt; {
        console.log('Database Connected to the server');
    })

app.use(express.json())

app.get('/', (req, res) =&gt; {
    res.send('Welcome to the Books API!');
});

// Create a new book
app.post('/books', async (req, res) =&gt; {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400)
            .json({ error: error.message });
    }
});

// Get all books
app.get('/books', async (req, res) =&gt; {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500)
            .json(
                {
                    error: error.message
                }
            );
    }
});

// Update a book by ID
app.put('/books/:id', async (req, res) =&gt; {
    try {
        const book =
            await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
        if (!book) {
            return res.status(404)
                .json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a book by ID
app.delete('/books/:id',
    async (req, res) =&gt; {
        try {
            const book =
                await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404)
                    .json({ error: 'Book not found' });
            }
            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500)
                .json({ error: error.message });
        }
    });

app.listen(3000, (req, res) =&gt; {
    console.log('Server is listening on port 3000');
});