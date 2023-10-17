const router = require("../router");
const homeController = require("../controllers/homeController");
const bookController = require("../controllers/booksController");

// home
router.get('/', homeController.home);

// books
router.get('/books', bookController.book_list);

module.exports = router;

