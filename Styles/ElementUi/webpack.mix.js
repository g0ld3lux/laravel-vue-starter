const { mix } = require('laravel-mix')

// Custom Configuration Using WebpackConfig Function
mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['vue', 'lodash', 'axios', 'vue-router', 'moment', 'vuex', 'vuex-router-sync', 'vee-validate'])
    // You May Need to Uncommend This After First Run
    // To Avoid Recompiling Vendor.js
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sourceMaps()
if (mix.config.inProduction) {
  mix.version()
}
// Best Used for Web based
// Will Run Using npm run dev
// You Will Need To Disable This if You Dont Need More Web Based Real Time Browser Refresh
mix.browserSync({
  proxy: 'laravel.dev'
})
// for Components We Just Need to Run npm run hot

// This Will Make Compilation Faster
mix.disableNotifications()
