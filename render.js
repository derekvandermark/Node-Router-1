// This file is in here so that the templateFile string paths are the same as when called from the controllers
const pug = require('pug');

function render(templateFile, data) {
    const compiledFunction = pug.compileFile(templateFile);
    return compiledFunction(data);
}

module.exports = render;