const express = require('express');
const quotesRouter = express.Router();
const {
    createQuote, getAllQuotes, getQuote, updateQuote, removeQuote, getRandomQuote
} = require('../controllers/quoteCntrl')


quotesRouter.get('/', getAllQuotes )

quotesRouter.get('/random', getRandomQuote)

quotesRouter.post('/create', createQuote)

quotesRouter.get('/:id', getQuote)

quotesRouter.put('/:id', updateQuote)

quotesRouter.delete('/:id', removeQuote)




module.exports = quotesRouter;
