# Styling Element Ui

## Changin All Neccessary Files

File Structures [./Styles/ElementUi/*](../Styles/ElementUi)


NOTE: 

If We Do Intend to use Element UI We Need to Move All This Files to Their Counter Part File Name in Our Main App

I Have Added Here Remarks On What is Changed Based on the Original App Files
```
Style/ElementUi
    - theme
        - index.css // <!-- This Holds Our Theme CSS
    - views
        - errors
            - 404.vue // <!-- Uses Element Ui Tags
            // You Can Add Other Error Pages Here

        - Layouts
            - partials
                - AppFooter.vue <!-- Uses Element Ui Tags
                - AppHeader.vue <!-- Uses Element Ui Tags

            - main.vue // <!-- Our Main Layout Uses Element Ui Tags

        - pages
            - home.vue // <!-- Our Home Layout Uses Element Ui Tags

    - app.js // <!-- Same as The Main App , No Need to replace
    - bootstrap.js // <!-- Holds Our Element Ui Themes
    - package.json // <!-- Hold All Dependencies for Element Ui
    - routes.js // <!-- linkActiveClass set for Element Ui
    - webpack.mix.js <!-- Add webpackConfig style-loader and css-loader
```

Counter Part File Structure We need to Replace

```
App Folder
    - webpack.mix.js
    - package.json
    - resources
        - assets
            - js
                - views
                    - errors
                        - 404.vue
                    - Layouts
                        - partials
                            - AppFooter.vue
                            - AppHeader.vue
                        - main.vue
                    - pages
                        - home.vue
                - themes
                    - index.css // element-ui default index.css Already Added in Our Main App
                - app.js // Same as app.js in element ui folder no Need to replace
                - bootstrap.js
                - routes.js

            - sass
                - app.scss // <!-- This File is Empty
```

Here are the List of ElementUI Files and Corresponding Counter Part in Our Main App We Need to replace

- [./Styles/ElementUi/app.js](../Styles/ElementUi/app.js) --> [./resources/assets/js/app.js](.././resources/assets/js/app.js)
- [./Styles/ElementUi/bootstrap.js](../Styles/ElementUi/bootstrap.js) --> [./resources/assets/js/bootstrap.js](.././resources/assets/js/bootstrap.js)
- [./Styles/ElementUi/package.json](../Styles/ElementUi/package.json) --> [./package.json](../package.json)
- [./Styles/ElementUi/routes.js](../Styles/ElementUi/routes.js) --> [./resources/assets/js/routes.js](.././resources/assets/js/routes.js)

- [./Styles/ElementUi/webpack.mix.js](../Styles/ElementUi/webpack.mix.js) --> [./webpack.mix.js](../webpack.mix.js)

- [./Styles/ElementUi/theme/index.css](../Styles/ElementUi/theme/index.css) --> [./resources/assets/js/theme/index.css](../resources/assets/js/theme/index.css)

Same Structure As Our
Main App  Structure Located @ [resources/assets/js/views/*](../resources/assets/js/views)

Lists Of Layout Files

- [./Styles/ElementUi/views/errors/404.vue](../Styles/ElementUi/views/errors/404.vue)

- [./Styles/ElementUi/views/Layouts/partials/AppFooter.vue](../Styles/ElementUi/views/Layouts/partials/AppFooter.vue)

- [./Styles/ElementUi/views/Layouts/partials/AppHeader.vue](../Styles/ElementUi/views/Layouts/partials/AppHeader.vue)

- [./Styles/ElementUi/views/Layouts/main.vue](../Styles/ElementUi/views/Layouts/main.vue)

- [./Styles/ElementUi/views/pages/home.vue](../Styles/ElementUi/views/pages/home.vue)

## Installing Dev Dependencies

Replace [./package.json](../package.json) by [./Styles/ElementUi/package.json](../Styles/ElementUi/package.json)

From Main App folder Type

```
mv Styles/ElementUi/package.json package.json
```

Edit and Remove all Commented Lines Using Text Editor

```
vim package.json or code package.json
```

Install All Dependencies Using NPM
```
npm install
```

or use Yarn 

```
rm yarn.lock
yarn install
```

## Compiling Assets

All Commands Are Listed on [./package.json](../package.json)
```
npm run dev - this will compile your app for dev

npm run hot - enable hot reloading

npm run production - compile for production all minification are added here

npm run watch - if you enable browsersync this is command to run

npm run watch poll - if you the app is a bit sluggish you may need to run this instead of watch.
```


## Full Import of Element Ui Components


[.bootstrap.js](../Styles/ElementUi/bootstrap.js)
```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
```

## Importing Few Components


```
npm install babel-plugin-component -D
```

edit .babelrc file
```js
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["syntax-async-functions","transform-regenerator","component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```

in your [.bootstrap.js](../Styles/ElementUi/bootstrap.js)
```js
import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)
```

[For Complete List of Component Check This Guide](./ElementUiIndividualComponentFull.md)

## Internationalization

For Full Import Just these line in your [.bootstrap.js](../Styles/ElementUi/bootstrap.js)

```js
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
```

For Import On Demand Element Ui 

```js
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

// import components
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

```

[For More Info About Internationalization Visit Click Here](http://element.eleme.io/#/en-US/component/i18n)


## Custom Theme

### Install related tool

```
npm i element-theme -g
```

### Then install the default theme from npm or GitHub.
```
# from npm
npm i element-theme-default -D

# from GitHub
npm i https://github.com/ElementUI/theme-default -D
```

### Initialize variable file

After successfully installing the above packages, a command named et is available in CLI (if the packages are installed locally, use node_modules/.bin/et instead). Run `-i` to initialize the variable file which outputs to element-variables.css by default.

```
et -i [custom output file] // We can Output it At ./resources/assets/js/theme/

> ✔ Generator variables file
```

Run this Command

```
et -i ./resources/assets/js/theme/element-variables.css
```

This will Out This File
```
./resources/assets/js/theme/element-variables.css
```

In ```element-variables.css``` you can find all the variables we used to style Element and they are defined in CSS4 style:
```css
:root {

  /* Colors
  -------------------------- */
  --color-primary: #20a0ff;
  --color-success: #13ce66;
  --color-warning: #f7ba2a;
  --color-danger: #ff4949;
  --color-info: #50BFFF;
  --color-blue: #2e90fe;
  --color-blue-light: #5da9ff;
  --color-blue-lighter: rgba(var(--color-blue), 0.12);
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #C0CCDA;

```

### Modify variables
Just edit element-variables.css, e.g. changing the theme color to red:

```css
--color-primary: red;
```

### Build theme

After saving the variable file, use `et` to build your theme. You can activate watch mode by adding a parameter `-w`. And if you customized the variable file's output, you need to add a parameter `-c` and variable file's name: You can specify its output directory with parameter `-o`

```
et

> ✔ build theme font
> ✔ build element theme
```



## Import custom theme
By default the build theme file is placed inside ./theme. You can specify its output directory with parameter -o. Importing your own theme is just like importing the default theme, only this time you import the file you just built:

Run this Command to Build element-variables.css to index.css

We can Specify the output of file using `-o` flag
```
et -o ./resources/assets/js/theme/index.css
```

```
import './theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)

```

## Import component theme on demand

If you are using babel-plugin-component for on-demand import, just modify .babelrc and specify styleLibraryName to the path where your custom theme is located relative to .babelrc. Note that ~ is required:

```
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["syntax-async-functions","transform-regenerator","component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "~theme"
    }
  ]]]
}
```