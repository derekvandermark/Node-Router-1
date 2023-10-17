const render = require("../render")

exports.home = async (req, res) => {
    const renderedHtml = render('views/layout.pug');
    res.end(renderedHtml);
}