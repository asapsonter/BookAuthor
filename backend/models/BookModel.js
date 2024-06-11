const mongoose = require('mongoose'); // Import mongoose library

const bookSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      publishYear: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;