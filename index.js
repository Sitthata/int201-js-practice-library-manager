const libraryManagement = () => {
    const books = [];
    const addBook = (isbn, title, author, genre, publishedYear) => {
        return books.push(new Book(isbn, title, author, genre, publishedYear));
    }

    const findBookByAuthor = (author) => {
        return books.filter(book => book.author === author);
    }

    const findBookByGenre = (genre) => {
        return books.filter(book => book.genre === genre)
    }

    const topRatedBook = () => {
        return [...books].sort((b1, b2) => b2.averageRating - b1.averageRating);
    }

    const recentlyPublish = () => {
        return [...books].filter(book => {
            const currentYear = new Date().getFullYear();
            return book.publishedYear - currentYear <= 5;
        }).sort((b1, b2) => b2.publishedYear - b1.publishedYear);
    }

    const test = () => {
        return ""
    }

    return {addBook, findBookByAuthor, findBookByGenre, topRatedBook, recentlyPublish};
}