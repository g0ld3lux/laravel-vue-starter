# 1. Cloaning And Installing Dependencies

```
git clone https://github.com/g0ld3lux/laravel-starter
composer install
npm install
php artisan key:generate
php artisan jwt:secret
```

# 2. Edit Your Hosts file

Note: Location May Vary Depending on Your Operating System

For Windows the path is: ```C/Windows/System32/drivers/etc/hosts```

Add the Following
hosts
```
127.0.0.1 laravel.dev
127.0.0.1 api.laravel.dev
```

# 3. Choosing Your Preferred .env file

- env.simple = Very Minimal Requirement , sqlite , and Mail Driver set to MailTrap.io for dev
- env.docker = If your Using Docker , and Want to Simulate api.laravel.dev and laravel.dev 

# 4. Add Your Mailtrap Credentials in .env

```
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=

```

# 5. Docker ENV Set Up

```
cp .env.docker .env
```


[If Your Not Familiar With Laradock Please Visit The Official Site](http://laradock.io/)

## 5.1. For Multiple Project Structure

```
code
- laradock
- api (APP FOLDER)
 // Add here Other Site Folder
```

### 5.1.1. Installation For Multiple Projects

go inside your code folder then
```
git clone https://github.com/Laradock/laradock.git
cd laradock
cp env-example .env
```

### 5.1.2. Edit Default NGINX Conf

at laradock folder
```
cd nginx/sites
```
edit default.conf
```conf
server {

    listen 80;
    listen [::]:80;

    server_name api.laravel.dev laravel.dev;  // <-- Our App Domain and Api Domain
    root /var/www/public;  //<-- Our App Root Folder
    index index.php index.html index.htm;

    location / {
         try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_pass php-upstream;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### 5.1.3. Open Laravel APP ENV File

Set the Following ENV var
```
DB_HOST=mysql
REDIS_HOST=redis
QUEUE_HOST=beanstalkd
```

### 5.1.4. Start Docker

Inside Your Laradock Folder
```
docker-compose up -d nginx mysql redis beanstalkd
```


## 5.2. For Per Project Structure

```
code
- api (APP FOLDER)
    - laradock
```
### 5.2.1. Per Project Installation

go inside your app folder
```
git submodule add https://github.com/Laradock/laradock.git
cd laradock
cp env-example .env
```
### 5.2.2. Edit Laradock ENV file 
Inside Laradock Folder
```
APPLICATION=../api/
```
### 5.2.3. Go to nginx/sites

```
cd nginx/sites
cp project-1.conf api.conf
```

### 5.2.4. Edit You Newly Created .conf file

```
vim api.conf
```

```conf
server {

    listen 80;
    listen [::]:80;

    server_name api.laravel.dev laravel.dev;  // <-- Our App Domain and Api Domain
    root /var/www/api/public;  //<-- Our App Root Folder
    index index.php index.html index.htm;

    location / {
         try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_pass php-upstream;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
### 5.2.5. Open Laravel APP ENV File

Set the Following ENV var
```
DB_HOST=mysql
REDIS_HOST=redis
QUEUE_HOST=beanstalkd
```

### 5.2.6. Start Docker

Inside Your Laradock Folder
```
docker-compose up -d nginx mysql redis beanstalkd
```

# 6. Adding Cron Jobs

## 6.1. Go to this folder

You can add your cron jobs to workspace/crontab/root 
after the php artisan line.
```php
* * * * * php /var/www/artisan schedule:run >> /dev/null 2>&1

# Custom cron
* * * * * root echo "Every Minute" > /var/log/cron.log 2>&1
```

Make sure you change the timezone if you don’t want to use the default (UTC).

# 7. Accessing Containers

```
docker exec -it laradock_workspace_1
docker exec -it laradock_mysql_1
docker exec -it laradock_redis_1
```

Note: if you replace the folder laradock to other name
you will need to change also the name of your containers

```
docker exec -it foldername_containername_1
```

# 8. Installing PHP Extension For REDIS and BEANSTALKD 

## 8.1. Install PHP Quer Driver Extension at Workspace Container

- At your App folder

```
composer require pda/pheanstalk
```

## 8.2. Install Redis Driver Extension at Workspace Container

- At your App folder

```
composer require predis/predis
```

# 9. Creating DB inside a Docker Container
- At Your Laradock Folder
```
docker exec -it laradock_mysql_1 bash
mysql -u root -p
password: root
create database api;
exit
```