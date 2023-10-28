export class Book {
    constructor(isbn, title, author, genre, publishedYear) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publishedYear = publishedYear;
        this.ratings = [];
    } 
    
    averageRating() {
        return this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    }

    rateBook(userId, rating) {
        this.ratings.push({userId: userId, rating: rating});
    }
}