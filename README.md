# Comic-Store-API
It's a simple REST API created using Node.js, MongoDB and Express.js library.

# Comic Book Store Backend

This project is a backend implementation for a React-based e-commerce store that manages comic books as inventory items. It provides CRUD functionality for managing comic books.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/comic-book-store-backend.git
   ```

2. Install dependencies:
   ```
   cd comic-book-store-backend
   npm install
   ```

3. Set up MongoDB:
   - Make sure you have MongoDB installed and running on your local machine.
   - The application will connect to a database named `comic_book_store`.

4. Start the server:
   ```
   npm start
   ```

The server will start running on `http://localhost:3000`.

## API Endpoints

- POST `/api/comics`: Create a new comic book
- GET `/api/comics`: Get all comic books (with pagination, filtering, and sorting)
- GET `/api/comics/:id`: Get a specific comic book by ID
- PUT `/api/comics/:id`: Update a comic book
- DELETE `/api/comics/:id`: Delete a comic book

## Postman Collection

A Postman collection for testing the API endpoints is included in the repository. Import the `Comic_Book_Store_API.postman_collection.json` file into Postman to use it.

## Error Handling

The API includes robust error handling for all endpoints, including input validation and meaningful error responses.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

# API Documentation

Base URL: `http://localhost:3000`

## 1. Create a Comic Book
- **Method**: POST
- **URL**: `http://localhost:3000/api/comics`
- **Body** (raw JSON):
  ```json
  {
    "bookName": "Spider-Man: New Beginnings",
    "authorName": "Peter Parker",
    "yearOfPublication": 2023,
    "price": 19.99,
    "discount": 0,
    "numberOfPages": 120,
    "condition": "new",
    "description": "A fresh start for your friendly neighborhood Spider-Man!"
  }
  ```

## 2. Get All Comic Books
- **Method**: GET
- **URL**: `http://localhost:3000/api/comics`
- **Query Parameters**:
  - `page`: Page number (default: 1)
  - `limit`: Number of items per page (default: 10)
  - `sort`: Field and order to sort by (e.g., `price:desc`, `yearOfPublication:asc`)
  - Any field name for filtering (e.g., `condition=new`, `authorName=Stan Lee`)

Examples:
- `http://localhost:3000/api/comics?page=1&limit=5`
- `http://localhost:3000/api/comics?sort=price:desc&condition=new`
- `http://localhost:3000/api/comics?authorName=Stan Lee&yearOfPublication=2023`

## 3. Get a Single Comic Book
- **Method**: GET
- **URL**: `http://localhost:3000/api/comics/:id`

Example:
- `http://localhost:3000/api/comics/60f1a5b9e6c1234567890123`

## 4. Update a Comic Book
- **Method**: PUT
- **URL**: `http://localhost:3000/api/comics/:id`
- **Body** (raw JSON, include only fields to be updated):
  ```json
  {
    "price": 24.99,
    "discount": 5
  }
  ```

Example:
- `http://localhost:3000/api/comics/60f1a5b9e6c1234567890123`

## 5. Delete a Comic Book
- **Method**: DELETE
- **URL**: `http://localhost:3000/api/comics/:id`

Example:
- `http://localhost:3000/api/comics/60f1a5b9e6c1234567890123`

Note: Replace `:id` in the URLs with the actual ID of a comic book in your database.