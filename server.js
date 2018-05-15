const express = require('express');
const app = express()
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const PORT = process.env.PORT || 5000;

const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(express.static(path.join(__dirname, '/dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')
app.get('/', (req, res) => res.render('index'));
app .listen(PORT, () => console.log(`Listening on ${ PORT }`));
