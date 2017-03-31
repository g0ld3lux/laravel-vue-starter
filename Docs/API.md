### Using Dingo Api

#### using api.domain.com
if you are using this. you need to uncomment at VerifyCsrfToken.php

Meaning you set you API_DOMAIN=api.domain.dev at your .env
```
protected $except = [
       // 'api/*'
    ];
```

#### using prefix /api
if you are using this you need this at VerifyCsrfToken.php

```
protected $except = [
       // 'api/*'
    ];
```

#### Using Transformers

#### Configuring Config/api.php


#### Using Postman
- Open [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)

- add to header ,where API_SUBTYPE is define in our .env (Use for Accessing Specific Api Version)

```
Accept: application/vnd.YOUR_SUBTYPE.v1+json
```


- Make Post Request to login

```
http://api.laravel.dev/auth/login
or
http://laravel.dev/auth/login
```

- Add to Body
```
email = admin@laravel.dev
password = password
```

- You will see Response something like this
```
{
  "status": "ok",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2FwaS5sYXJhdmVsLmRldlwvYXV0aFwvbG9naW4iLCJpYXQiOjE0ODkzMzI1OTcsImV4cCI6MTQ4OTM5NzM5NywibmJmIjoxNDg5MzMyNTk3LCJqdGkiOiJjODMxNTMzZjkzMGFiOTkzMGExMzhkMGNkOTI5NGI3ZCJ9.3v-cGtXA-ySmL67pp4kZ4U4Mf3v7ge_CzUEdWIRKSeM"
}
```
If .env
```
API_STRICT =  true
```
Header 

Key:
Accept

Value:
application/x.apisubtype.v1+json

