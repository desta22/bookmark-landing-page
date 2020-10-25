const mix = require('laravel-mix');



mix.options({
    processCssUrls: false
});

mix.js('src/js/app.js', 'dist/js')
    .babel('dist/js/app.js', 'dist/js/app.js')
    .sass('src/scss/app.scss', 'dist/css')
    .sourceMaps()
    .webpackConfig({
        devtool: 'source-map'
    });



