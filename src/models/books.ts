import { Schema, model, connect } from 'mongoose';

interface IBook {
    Id: string,
    Name: string,
    RatingDist1: string,
    pagesNumber: number,
    RatingDist4: string,
    RatingDistTotal: string,
    PublishMonth: number,
    PublishDay: number,
    Publisher: string,
    CountsOfReview: number,
    PublishYear: number,
    Language: string,
    Authors: string,
    Rating: number,
    RatingDist2: string,
    RatingDist5: string,
    ISBN: string,
    RatingDist3: string
}

const book = new Schema<IBook>({
    Id: {
        type: String,
        require: true,
        trim: true
    },
    Name: {
        type: String,
        require: true,
        trim: true
    },
    RatingDist1: {
        type: String,
        require: true,
        trim: true
    },
    pagesNumber: {
        type: Number,
        require: true,
        trim: true
    },
    RatingDist4: {
        type: String,
        require: true,
        trim: true
    },
    RatingDistTotal: {
        type: String,
        require: true,
        trim: true
    },
    PublishMonth: {
        type: Number,
        require: true,
        trim: true
    },
    PublishDay: {
        type: Number,
        require: true,
        trim: true
    },
});

const Book = model<IBook>("book", book)
export default Book;