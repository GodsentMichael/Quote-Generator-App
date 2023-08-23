const quoteModel = require('../models/quoteModel');
const generateQuote = require('../helpers/quotes')

//Create quote
exports.createQuote = async (req, res) => {
    const generatedQuote = generateQuote();
    console.log("generatedQuote=>", generatedQuote)
    try {
        const newQuote = await quoteModel.create(generatedQuote);
        res.status(201).json({
            status: 'success',
            data: {
                quote: newQuote,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!',
        });
    }
}

//Get all quotes
exports.getAllQuotes = async (req, res) => {
    try {
        const quotes = await quoteModel.find();
        res.status(200).json({
            status: 'success',
            results: quotes.length,
            data: {
                quotes,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

//Get a single quote
exports.getQuote = async (req, res) => {
    const { id } = req.params;
    try {
        const quote = await quoteModel.findById(id);
        res.status(200).json({
            status: 'success',
            data: {
                quote,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.updateQuote = async (req, res) => {
    const { id } = req.params;
const {content, author} = req.body;

    try {
        // const updatedQuote = await quoteModel.updateOne({ _id: id }, { $set:  req.body });
        const updatedQuote = await quoteModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                quote: updatedQuote,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
 }

 exports.removeQuote = async(req, res) => {
    const { id } = req.params;
    try {
        await quoteModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
 }
  
exports.getRandomQuote = async(req, res) => {
    try {
        const count = await quoteModel.countDocuments();
        // console.log("count=>", count)
        const random = Math.floor(Math.random() * count);
        // console.log("random=>", random)
        const quote = await quoteModel.findOne().skip(random);
        // console.log("quote=>", quote)
        res.status(200).json({
            status: 'success',
            data: {
                quote,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}
  
  
  
  
  