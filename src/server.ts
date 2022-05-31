import Koa from 'koa';
import router from './routers';
import koaStatic from 'koa-static';
import { createServer } from 'http';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import { connect } from './config/db';

const app = new Koa();

connect();

app.use(
    koaBody({
        urlencoded: true,
        json: true,
    })
);
app.use(cors());
app.use(koaStatic(__dirname + '/public'));

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
    // ERROR HANLDER

    try {
        await next();
        const status = ctx.status || 404;
        if (status === 404) {
            ctx.body = 'NOT FOUND';
        }
    } catch (err) {
        console.error(err);
        console.log(err.message);
        ctx.status = err.status || 500;
        if (ctx.status === 200) {
            ctx.body = {
                status: false,
                message: err.message,
            };
        } else if (ctx.status === 404) {
            ctx.body = {
                status: false,
                message: 'URL NOT FOUND',
            };
        } else {
            ctx.body = err;
        }
    }
});

app.use(router);

const httpServer = createServer(app.callback());

const PORT = process.env.PORT || 7000;
httpServer.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});