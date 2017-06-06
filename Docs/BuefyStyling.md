#### Compiling Assets

npm run dev - this will compile your app for dev

npm run hot - enable hot reloading

npm run production - compile for production all minification are added here

npm run watch - if you enable browsersync this is command to run

npm run watch poll - if you the app is a bit sluggish you may need to run this instead of watch.


#### Custom Styling

Edit: resources/assets/sass/app.scss

And Add All Your Custom CSS Here

Also Remember to uncomment this on your webpack.mix.js

after your first npm run dev

```
  //  .sass('resources/assets/sass/app.scss', 'public/css')
```

This File is Empty by Default.


#### Changing Fonts


You May reference or Use Font Awesome...

by defining it in your Buefy Constructor


Path: resources\assets\js\app.js
```
Vue.use(Buefy, {
    defaultIconPack: 'fa',
    defaultContentElement: '#content',
    ...
})

```

Note: that The Default  Icon is Material Icon
and is reference in our 

resources/views/app.blade.php 
```
 <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

#### Edit Main Layout template


resources\assets\js\views\Layouts\main.vue

Default :

You Check all [Variables Here](http://bulma.io/documentation/overview/variables/)

```
<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
```

#### For more Info About Buefy Go to this [LINK](https://buefy.github.io/?#/documentation/quick-start)