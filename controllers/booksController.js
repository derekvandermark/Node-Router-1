const render = require("../render")

exports.book_list = async (req, res) => {
    const renderedHtml = render('views/book_list.pug');
    res.end(renderedHtml);
}