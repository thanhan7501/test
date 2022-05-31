import Router from '@koa/router';
import { getBooks, createBooks, updateBooks, deleteBooks, borrowBooks } from '../controllers/books';
const router = new Router();

router.get("/", getBooks);

router.post("/", createBooks);

router.put("/:id", updateBooks);

router.delete("/:id", deleteBooks);

router.post("/borrow", borrowBooks)

const bookRoute = router.routes();
export default bookRoute;