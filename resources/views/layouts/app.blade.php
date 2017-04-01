<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    @include('header')
    <!-- Meta -->
    <!-- Title -->
    <!-- Css -->
    <!-- Critical CSS -->
    @stack('head_scripts')
    <body>
    <div id="app">
        @yield('content')
    </div>
    @include('footer')
    @stack('modals')
    @stack('footer_scripts')
    </body>
</html>
