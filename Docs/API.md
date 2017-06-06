# 1. Using Dingo Api

## 1.1. using api.domain.com
if you are using this. you need to uncomment at VerifyCsrfToken.php

Meaning you set you API_DOMAIN=api.domain.dev at your .env
```
protected $except = [
       // 'api/*'
    ];
```

## 1.2. using prefix /api
if you are using this you need this at VerifyCsrfToken.php

```
protected $except = [
       // 'api/*'
    ];
```

## 1.3. Set Your ENV Variable OR Configure Your Config/api.php

Set Your ENV Variable
[./config/api.php](../config/api.php)
[.env](../.env.docker)

Note: You Cant Access Api End Point In your Browser , Only Via AJAX Request of Postman IF

```
API_STRICT =  true
```

# 2. Testing Endpoint Using Postman

### 2.0.1. Download [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)


## 2.1. Create an Account and Login with your Postman Credentials

## 2.2. Add to Neccessary header 

- where API_SUBTYPE is define in our .env (Use for Accessing Specific Api Version)

```
Accept: application/vnd.YOUR_SUBTYPE.v1+json
```


## 2.3. Make Post Request to login

### 2.3.1. URL to Hit
```
http://api.laravel.dev/auth/login
or
http://laravel.dev/auth/login
```

### 2.3.2. Add to Body
```
email = admin@laravel.dev
password = password
```
## 2.4. We Get the Access Token (JWT)


```
{
  "status": "ok",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2FwaS5sYXJhdmVsLmRldlwvYXV0aFwvbG9naW4iLCJpYXQiOjE0ODkzMzI1OTcsImV4cCI6MTQ4OTM5NzM5NywibmJmIjoxNDg5MzMyNTk3LCJqdGkiOiJjODMxNTMzZjkzMGFiOTkzMGExMzhkMGNkOTI5NGI3ZCJ9.3v-cGtXA-ySmL67pp4kZ4U4Mf3v7ge_CzUEdWIRKSeM"
}
```

# 3. Returning a response with cookie

Note: our ENV 

SESSION_DOMAIN=.laravel.dev

You can Do this Inside Your Controller 
```

$name = 'samplecookie';
$value = 'my-cookie';
$minutes = 60;
$path = '/';
$domain = 'api.laravel.dev';
$secure = false;
$httpOnly =false;
return response()
->json([
    'status' => 'ok',
    'token' => $token,
    'firstName' => $firstname,
    'lastName' => $lastname,
    'email' => $email
])->header('Authorization','Bearer ' . $token)
->withCookie($name, $value, $minutes, $path, $domain, $secure, $httpOnly);
```
