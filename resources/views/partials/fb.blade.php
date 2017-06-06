
<script>
    window.fbAsyncInit = function () {
      FB.init({
        appId: {{ config('laravel-facebook-sdk.facebook_config.app_id') }},
        cookie: true,
        xfbml: true,
        version: '{{ config('laravel-facebook-sdk.facebook_config.default_graph_version') }}' 
      })
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  </script>
