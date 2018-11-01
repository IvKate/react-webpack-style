const postcssPrependClassPlugin = require("./postcss-prepend-class-plugin");

cosole.log(postcssPrependClassPlugin)

module.exports = ({ file, options, env }) => ({
    plugins: {
        'postcssPrependClassPlugin': {className: "#megaReact ._sc"},
    }
})