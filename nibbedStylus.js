var stylusLoader = require("stylus-loader");
var nib = require("nib")();

module.exports = function(source) {
    Object.assign(this.query, {
        stylus: {
            use: [nib]
        }
    });
    return stylusLoader.call(this, source)
}
