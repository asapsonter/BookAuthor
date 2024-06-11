const express = require('express');

const app = express();
const {createBook, getAll, getBookID, UpdateID, deleteBookID} = require('../controller/bookController.js');
app.use(express.json()); //middleware for parsing incoming request bodies




const router = express.Router();


router.post('/', createBook); // create book route
router.get('/', getAll); // get all books route
router.get('/:id', getBookID); // get book by id route
router.put('/:id', UpdateID); // update book by id route
router.delete('/:id', deleteBookID); // delete book by id route


  module.exports = router;
  