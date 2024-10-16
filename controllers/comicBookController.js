const ComicBook = require('../models/ComicBook');

// Create a new comic book
exports.createComicBook = async (req, res) => {
    try {
        const comicBook = new ComicBook(req.body);
        await comicBook.save();
        res.status(201).json(comicBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all comic books with pagination, filtering, and sorting
exports.getAllComicBooks = async (req, res) => {
    try {
        const { page = 1, limit = 10, sort, ...filters } = req.query;
        const query = {};

        // Apply filters
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                query[key] = filters[key];
            }
        });

        // Apply sorting
        const sortOption = {};
        if (sort) {
            const [field, order] = sort.split(':');
            sortOption[field] = order === 'desc' ? -1 : 1;
        }

        const comicBooks = await ComicBook.find(query)
            .sort(sortOption)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await ComicBook.countDocuments(query);

        res.json({
            comicBooks,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single comic book by ID
exports.getComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findById(req.params.id);
        if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
        res.json(comicBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a comic book
exports.updateComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
        res.json(comicBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a comic book
exports.deleteComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
        if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
        res.json({ message: 'Comic book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};