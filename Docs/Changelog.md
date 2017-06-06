### Changelog

 - [x] Uses [Laravel Version ^ 5.4 ](https://laravel.com/docs/5.4)

 - [x] Uses [Vue Version ^ 2.2 ](https://vuejs.org/v2/guide/) 

 - [x] Uses Various ES6 Presets

    - file related: 
        - [.babelrc](../.babelrc)

 - [x] ES Lint Ready (.eslintrc)
 - Easily Lint Your JS Files
    - file: 
        - [.eslintrc](../.eslintrc)

 - [x] Uses [Element](http://element.eleme.io/#/en-US) for UI
 - Added To Your Dependecies
    - files related:
        - [package.json](../package.json)
 - 

 - [x] [Vuex State Management Ready](https://vuex.vuejs.org/en/getting-started.html)
 - Uses Modules For Vuex For Large Application Scalability
    - files related: 
        - [./resources/assets/js/vuex/store/index.js](../resources/assets/js/vuex/store/index.js)
        - [./resources/assets/js/vuex/store/modules/auth.js](../resources/assets/js/vuex/store/modules/auth.js)
        - [./resources/assets/js/vuex/store/modules/users.js](../resources/assets/js/vuex/store/modules/users.js)
        - [./resources/assets/js/app.js](../resources/assets/js/app.js)

 - [x] SPA Using [Vue Router](https://router.vuejs.org/en/)
 - Uses Reusable Layout/Templates and Lazy Loading for performance
    - file related: 
        - [./resources\assets\js\routes.js](../resources\assets\js\routes.js)
 - Uses Vue Router Sync
    - file related:
        - [./resources/assets/js/app.js](../resources/assets/js/app.js) ```Added Vue Router Sync, Vuex Ready!```

 - [x] [JWT Auth Version: dev-develop](https://github.com/tymondesigns/jwt-auth) 
 
 - Seemlessly Integrated with Laravel Auth Facade and Authentication and AuthenticateUsers Trait.
    - file related: 
        - [./app/Models/Auth/User.php](../app/Models/Auth/User.php)```(user implementation)```
        - [./api/V1/Auth/Controllers/LoginController.php](../api/V1/Auth/Controllers/LoginController.php) ```Added All Method For Authentication```
        - [./api/V1/Auth/Controllers/ForgotPasswordController.php](../api/V1/Auth/Controllers/ForgotPasswordController.php) ```Added Max Password Reset Request Resent```
        - [./api/V1/Auth/Controllers/ResetPasswordController.php](../api/V1/Auth/Controllers/ResetPasswordController.php) ``` Release Token if Password was Reset```
        - [./api/V1/Auth/Controllers/SignUpController.php](../api/V1/Auth/Controllers/SignUpController.php)```Release Token if SignUp Successful```
        - [./config/auth.php](../config/auth.php)``` (make api default guard)```
        - [./.env](../.env.docker)```Added JWT ENV ```
        - [./app/Mutators/UserMutator.php](../app/Mutators/UserMutator.php) ```Added getJWTIdentifier and getJWTCustomClaims method ```
 - Implements JWT Middleware
    - files related:
        - [./app/Http/Kernel.php](../app/Http/Kernel.php)```(added jwt.auth and jwt.refresh)```

 - Easily Configure Your Authentication with Auth Scaffold Configuration file : 
    - file related:
        - [./config/auth_scaffold.php](../config/auth_scaffold.php)```You Can Add Validation Fields Or Use the Default Set Here ```

 - [x] [Dingo Api Version: 1.0.*@dev](https://github.com/dingo/api/wiki/Installation)
 - Implements REST API
    - files related:
        - [./routes/api.php](../routes/api.php)```You can Enable or Disable Domain Routing and Api Versions ```
        - [./.env](../.env.docker)```Set All Your API Config Here For Production```
 - Implements Transformers for Api Endpoints
    - files related:
        - [./api/V1/Users/Transformers/UserTransformer.php](../api/V1/Users/Transformers/UserTransformer.php)```Sample Users Transformers ```

 - [x] ACL Ready using [Bouncer](https://github.com/JosephSilber/bouncer)

 - [Learn More How to Implement ACL in This REPO](../Docs/ACL.md)

 - Implements Middleware for Roles and Abilities: 
    - files related:
        - [./app/Http/Middleware/CheckAbilities.php](../app/Http/Middleware/CheckAbilities.php)```Use this if You Want to restric Some Routes By Abilities ```
        - [./app/Http/Middleware/CheckRoles.php](../app/Http/Middleware/CheckRoles.php)```Use this if You Want to restric Some Routes By Roles ```
        - [./app/Http/Kernel.php](../app/Http/Kernel.php)```enabled roles and abilities middleware```

 - Implementation of Middleware in Routes
    - file related:
        - [./routes/api.php](../routes/api.php)```Added Sample Abilities and Roles Restricted Endpoints ```
 - Implementation in User Model
    - file related:
        - [./app/Models/Auth/User.php](../app/Models/Auth/User.php)```Added Bouncer Trait HasRolesAndAbilities ```
        - [./app/Mutators/UserMutator.php](../app/Mutators/UserMutator.php) ```Added scopeWhereCan So that Our Middleware Abilities and Roles will Work ```
 - Implementation of Seeding Default Roles and Abilities
    - files related:
        - [./database/seeds/UsersTableSeeder.php](../database/seeds/UsersTableSeeder.php)```Added Default User and Roles and Abilities ```
        - [./database/migrations/2017_03_18_021252_create_bouncer_tables.php](../database/migrations/2017_03_18_021252_create_bouncer_tables.php)```Added Bouncer Tables ```



 - [x] [Webpack](https://webpack.github.io/) / [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) 
 - Easily Manage Resources and Compilation
    - file related:
        - [./webpack.mix.js](../webpack.mix.js)```Extract Vendor Assets to vendor js ```
 - Implement Laravel Mix Function on Blade
    - file related:
        - [./resources/views/app.blade.php](../resources/views/app.blade.php)```Added Mix function, proper order should be observe: manifest-vendor-app ```

 - [x] [CORS](https://github.com/barryvdh/laravel-cors)

    - file related:
        - [./app/Http/Kernel.php](../app/Http/Kernel.php)```Enabled Cors Middleware ```
 
 - [x] [Facebook SDK](https://github.com/SammyK/LaravelFacebookSdk) and Login
 - [For Submitting Apps and Approval Read This](../Docs/FB.md)
 - Make User ID non incrementing and Big Integer
    - file related:
        - [./database/migrations/2014_10_12_000000_create_users_table.php](../database/migrations/2014_10_12_000000_create_users_table.php)```Added Big Integer ID for FB ID ```
        - [./app/Models/Auth/User.php](../app/Models/Auth/User.php)```SET properties public $incrementing = false ```
        - [./app/Mutators/UserMutator.php](../app/Mutators/UserMutator.php) ```Added On UserMutator generateUniqueCode Method```
        
        - [./app/Observers/UserObserver.php](../app/Observers/UserObserver.php) ```Listen When User Is Creating and Generate Unique ID if FBID Not Set```
 - Added Fb Login Authentication Routes
    - file related:
        - [./api/V1/Auth/Controllers/FbLoginController.php](../api/V1/Auth/Controllers/FbLoginController.php)```Added Web Based Authentication for FB```
 - Added Fb login Global Component
    - file related:
        - [./resources/assets/js/components/FbLogin.vue](../resources/assets/js/components/FbLogin.vue)```Added Client Side Authentication For FB```
 - Added FB Config
    - file related:
        - [./config/laravel-facebook-sdk.php](../config/laravel-facebook-sdk.php) ```Added to ENV FB_GRAPH_VERSION ```
        - [./.env](../.env.docker)``` (Added ENV for Facebook)```