import * as Koa from 'koa';
import Book from "../models/books"
import BookService from '../models/bookService';

const getBooks = async (ctx: Koa.Context) => {
    const page = ctx.query.page;
    const pageSize: number = 5;
    if (!page) {
        return (ctx.body = {
            status: false,
            message: "page not found",
        })
    }
    const skip: number = (Number(page) - 1) * pageSize;
    const books = await Book.find({}).lean().sort({ Id: 1 }).skip(skip).limit(pageSize);
    ctx.body = {
        status: true,
        message: "get book success",
        data: {
            books
        }
    }
}

const createBooks = async (ctx: Koa.Context) => {
    const book = new Book(ctx.request.body);
    await book.save();
    ctx.body = {
        status: true,
        message: "create book success"
    }
}

const updateBooks = async (ctx: Koa.Context) => {
    const id = ctx.params.id;

    if (!id) {
        return (ctx.body = {
            status: false,
            message: "no book id found"
        })
    }

    const content = ctx.request.body;

    await Book.updateOne({ _id: id }, content);
    return (ctx.body = {
        status: true,
        message: "update book success"
    })
}

const deleteBooks = async (ctx: Koa.Context) => {
    const id = ctx.params.id;

    if (!id) {
        return (ctx.body = {
            status: false,
            message: "no book id found"
        })
    }

    await Book.deleteOne({ _id: id });
    return (ctx.body = {
        status: true,
        message: "update book success"
    })
}

const borrowBooks = async (ctx: Koa.Context) => {
    const bookService = new BookService(ctx.request.body);
    await bookService.save();
    ctx.body = {
        status: true,
        message: "borrow book success"
    }
}

export {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks,
    borrowBooks
}