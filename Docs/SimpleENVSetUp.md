## Cloaning And Installing Dependencies

```
git clone https://github.com/g0ld3lux/laravel-starter
composer install
npm install
php artisan key:generate
php artisan jwt:secret
```


## Choosing Your Preferred .env file

- env.simple = Very Minimal Requirement , sqlite , and Mail Driver set to MailTrap.io for dev
- env.docker = If your Using Docker , and Want to Simulate api.laravel.dev and laravel.dev 


### Simple ENV Set Up

```
cp .env.simple .env
```

#### Add Your Mailtrap Credentials in .env

```
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=

```

#### Create Database in Sqlite

Note: You Need TO Enable PHP Extension for Sqlite and Also Install Sqlite3

- Go to ./database folder then

```
touch database.sqlite
```

#### Log in Sqlite

```
sqlite3 database.sqlite
```

#### Useful Sqlite3 Commands

```
.help
.databases
.quit
.schema ?TABLE?
.tables ?PATTERN?
```

[see more commands here]((https://www.tutorialspoint.com/sqlite/sqlite_commands.htm))

#### Migrate and Seed

```
php artisan migrate --seed
```

#### Uncomment api in VerifyCsrfToken.php

```
protected $except = [
        'api/*'
    ];
```

#### Serve Site on localhost:8000

```
php artisan serve
```

#### Your Api End Point

```
localhost:8000/api/*
```