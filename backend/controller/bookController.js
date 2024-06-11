const Book = require('../models/BookModel.js');

// create a new Book ID
const createBook = async (req, res) => {
    if (!req.body ||!req.body.title ||!req.body.author ||!req.body.publishYear) {
        return res.status(400).json({ message: 'Send all required fields: title, author, publishYear' });
    }
    const book = await Book.create(req.body);
    res.status(200).json(book);
};

// get all books
// Route for Get All Books from database
const getAll = async (request, response) => {
    try {
      const books = await Book.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

  // get single Id
  // Route for Get One Book from database by id
const getBookID = async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await Book.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

 // Route for Update a Book
const UpdateID = async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
  
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  }; 

  //delete book by id
  // Route for Delete a book
const deleteBookID = async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

  module.exports = {
    createBook,
    getAll,
    getBookID,
    UpdateID,
    deleteBookID
    
                };