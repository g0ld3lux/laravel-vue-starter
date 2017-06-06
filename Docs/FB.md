### Configure Your FB Configuration in .env

```
FB_APP_ID=1291841020933336
FB_APP_SECRET=ab2676e1ec89bae6a6dfa21bca286f29
FB_GRAPH_VERSION=v2.9
FB_REDIRECT_URL=http://api.fb.dev/fb/callback
```

Note: You Need to Update this Based on Your Credentials

#### Files Related To Fb Login

```
config/laravel-facebook-sdk.php
Api\V1\Auth\Controllers\FBLoginController
```


#### Get the URL in Your Vue JS using an Api Call

### For Javascript SDK

#### Files Related

```
resources\views\partials\fb.blade.php
```

#### Go to Developers Facebook
```
https://developers.facebook.com/
```

#### Add a Fb Login

#### Go to Fb Login Settings

#### Add your Fb Callback URL in Valid OAuth redirect URIs

```
http://api.fb.dev/fb/callback
```

#### On Your Dashboard Settings

Add this to your App Domains

```
api.fb.dev
fb.dev
```
Add Platform Website

```
Site Url: http://api.fb.dev
```

### Note: if you need Extra permissions in Facebook 

Go to App Review and Submit Items for Approval