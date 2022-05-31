import { Schema, model, connect } from 'mongoose';

interface IBookService {
    username: string,
    bookId: Schema.Types.ObjectId,
    borrowDate: Schema.Types.Date,
    returnDate: Schema.Types.Date,
    isReturned: Boolean
}

const bookService = new Schema<IBookService>({
    username: {
        type: String,
        require: true,
        trim: true,
    },
    bookId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    borrowDate: {
        type: Date,
        default: Date.now(),
    },
    returnDate: {
        type: Schema.Types.Date,
        default: Date.now(),
    },
    isReturned: {
        type: Boolean,
        default: false
    }
})

const BookService = model<IBookService>("bookService", bookService)
export default BookService;