<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>My Laravel App</title>

    </head>
    @include('partials.fb')
    <body>
        <div id="app">
            <transition name="fade" mode="out-in">
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
            </transition>
        </div>
        <script type="text/javascript" src="/js/manifest.js"></script>
        <script type="text/javascript" src="/js/vendor.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
