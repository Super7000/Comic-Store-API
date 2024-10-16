const mongoose = require('mongoose');

const ComicBookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    authorName: { type: String, required: true },
    yearOfPublication: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    numberOfPages: { type: Number, required: true },
    condition: { type: String, required: true, enum: ['new', 'used'] },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ComicBook', ComicBookSchema);