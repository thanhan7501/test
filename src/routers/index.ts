import Router from '@koa/router';
import bookRoute from "./book"
const router = new Router();

router.use(bookRoute);

export default router.routes();