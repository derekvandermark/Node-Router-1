const render = require("../render")

exports.category_home = async (req, res) => {
    const renderedHtml = render('views/categories.pug');
    res.end(renderedHtml);
}