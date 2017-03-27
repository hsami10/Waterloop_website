//need to create a new HTML file as well since it contains a useless link to our js file now
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({   //constructor instance
    template: __dirname + '/app/bin/index.html', //current path file
    filename: 'index.html',                  //new file name
    inject: 'body'                           //inject in head or body of new HTML file?
});

module.exports = {
    //entry point is the file that WebPack will transform. __dirname refers to the currently executing file
    entry: __dirname + '/app/src/index.jsx',
    //all transformations go inside module's loaders array. test specifies which files will be affected by the
    //loader (regexp). Include/exclude. loader specifies what transformation to perform.
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /(\.scss|\.css)$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            }
        ]
    },
    //where should the transformed file go? New transformed file will be renamed transformed.js and stored.
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    //plugins array containing configured HTMLWebpackPlugin instance
    plugins: [HTMLWebpackPluginConfig]
};