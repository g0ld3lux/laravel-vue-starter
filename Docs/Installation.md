#### Cloaning And Installing Dependencies

```
git clone https://github.com/g0ld3lux/app-starter
composer install
npm install
php artisan key:generate
php artisan jwt:secret
```


#### Setting .env

- basic.env = Very Minimal Requirement , sqlite , and Mail Driver set to MailTrap.io for dev
- docker.env = If your Using Docker , and Want to Simulate api.laravel.dev and laravel.dev 
- production.env = For Production , Uses Docker , Gcloud and Kubernetes


#### Add Your Mailtrap Credentials in .env

```
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=

```

#### Create Database in Sqlite

- Go to Database folder then

```
touch database.sqlite
```

#### Log in Sqlite

```
sqlite3 database.sqlite
```


#### Migrate and Seed

```
php artisan migrate --seed
```


#### Serve Site on localhost:8000

```
php artisan serve
```

#### Your Api End Point

```
localhost:8000/api/*
```