## By Default the REPO Uses BUEFY COMPONENTS

But You Can Check All The Files Responsible For Our Buefy Style and Layout

Here are the List of Buefy Files and Corresponding Counter Part in Our Main App
- [./Styles/Buefy/app.js](../Styles/Buefy/app.js) --> [./resources/assets/js/app.js](.././resources/assets/js/app.js)
- [./Styles/Buefy/bootstrap.js](../Styles/Buefy/bootstrap.js) --> [./resources/assets/js/bootstrap.js](.././resources/assets/js/bootstrap.js)
- [./Styles/Buefy/package.json](../Styles/Buefy/package.json) --> [./package.json](../package.json)
- [./Styles/Buefy/routes.js](../Styles/Buefy/routes.js) --> [./resources/assets/js/routes.js](.././resources/assets/js/routes.js)

- [./Styles/Buefy/webpack.mix.js](../Styles/Buefy/routes.js) --> [./webpack.mix.js](../webpack.mix.js)


Layout Files Structure For Buefy

```
views
    - errors
        - 404.vue  
    - Layouts
        - partials
            - AppFooter.vue
            - AppHeader.vue
        - main.vue
    - pages
        - home.vue
```
Same Structure As Our
Main App  Structure Located @ [resources/assets/js/views/*](../resources/assets/js/views)

Lists Of Layout Files
- [./Styles/Buefy/views/errors/404.vue](../Styles/Buefy/views/errors/404.vue)

- [./Styles/Buefy/views/Layouts/partials/AppFooter.vue](../Styles/Buefy/views/Layouts/partials/AppFooter.vue)

- [./Styles/Buefy/views/Layouts/partials/AppHeader.vue](../Styles/Buefy/views/Layouts/partials/AppHeader.vue)

- [./Styles/Buefy/views/Layouts/main.vue](../Styles/Buefy/views/Layouts/main.vue)

- [./Styles/Buefy/views/pages/home.vue](../Styles/Buefy/views/pages/home.vue)


#### Installing Dependencies

```
npm install or yarn install
```

#### Compiling Assets

All Commands Are Listed on [./package.json](../package.json)
```
npm run dev - this will compile your app for dev

npm run hot - enable hot reloading

npm run production - compile for production all minification are added here

npm run watch - if you enable browsersync this is command to run

npm run watch poll - if you the app is a bit sluggish you may need to run this instead of watch.
```

#### Custom Styling

This File is Empty by Default.

Edit: [./resources/assets/sass/app.scss](../resources/assets/sass/app.scss)

And Add All Your Custom CSS Here

Also Remember to uncomment this on your webpack.mix.js

after your first npm run dev

```
  //  .sass('resources/assets/sass/app.scss', 'public/css')
```


#### Changing Fonts


You May reference or Use Font Awesome...

by defining it in your Buefy Constructor


Path: [resources\assets\js\app.js](../resources\assets\js\app.js)
```
Vue.use(Buefy, {
    defaultIconPack: 'fa', // Change Icon to Font Awesome
    defaultContentElement: '#content', // Your Main Content element ID
    ...
})

```

Note: that The Default  Icon is Material Icon
So No Need To Add This Constructor if You Dont Have Plans to use Font Awesome Icons

You Should Make Sure That This Link Reference Exist in Our main app.blade.php

[resources/views/app.blade.php ](../resources/views/app.blade.php)

```
 <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

If You Plan to Use Font Awesome Add this On Your 
[resources/views/app.blade.php ](../resources/views/app.blade.php)

```
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
```
Of Course You Can use NPM to install it and just import it on your app.scss

```
npm install font-awesome --save-dev
```

[./resources/assets/sass/app.scss](../resources/assets/sass/app.scss)

```
@import "node_modules/font-awesome/scss/font-awesome";
```

on your [./webpack.mix.js](../webpack.mix.js)
copy fonts
```
mix.copy('node_modules/font-awesome/fonts','public/build/fonts')
```
also compile your app.scss
```
mix.sass('app.scss', 'public/css/app.css')
```

You can Uncomment mix.sass and mix.copy after you compiled it to make succeeding compilation faster

Lastly Reference app.css on your [resources/views/app.blade.php ](../resources/views/app.blade.php)

```
<link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}">
```
#### Edit Main Layout template THEME


[./resources\assets\js\views\Layouts\main.vue](../resources\assets\js\views\Layouts\main.vue)

Default :

You Check all [Variables Here](http://bulma.io/documentation/overview/variables/)

You Can replace All Variables And Customize its Look
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