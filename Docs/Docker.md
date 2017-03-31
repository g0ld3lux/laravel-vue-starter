## Laradock Workflow

### Folder Structuring

```
code
- laradock
- api
```

### Setting Your App Folder

- Edit docker-compose.yml

```
 applications:
        image: tianon/true
        volumes:

        - ../api/:/var/www/api //<-- Add Your Site Folder to be Shared
```

### Configuring Nginx

- Go to laradock/nginx/sites

```
cp sample.conf.example api.laravel.conf
```
Edit it to use api and laravel.dev as your Site Domain



```
server {

    listen 80;
    listen [::]:80;

    server_name api.laravel.dev laravel.dev;  // <-- Our App Domain
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

### Starting Server


```
docker-compose up -d nginx redis mysql beanstalkd
```

### Setting ENV

- [x] Use a .env.docker as your .env


### Task Scheduler


- Go to this folder

```
workspace/crontab/root
```

And Add your Cron Job
```
* * * * * php /var/www/api/artisan schedule:run >> /dev/null 2>&1
```

### Accessing Containers


#### SSH to Container Name

```
docker exec -it laradock_workspace_1
docker exec -it laradock_mysql_1
docker exec -it laradock_redis_1
```

#### Install PHP Quer Driver Extension at Workspace Container
- At your App folder
```
composer require pda/pheanstalk
```

#### Install Redis Driver Extension at Workspace Container
- At your App folder
```
composer require predis/predis
```


#### Migration at Workspace Container

- At your App folder
```
php artisan tinker
```


## Extras


Since it is Configure for laravel.dev/api/* for the basic .env.dev

just remove that route

```
// api/* ->remove this 
```

- editing hosts file
```
127.0.0.1 laravel.dev
127.0.0.1 api.laravel.dev
```

- creating DB inside a Docker Container
```
docker exec -it laradock_mysql_1
mysql -u root -p
password: root
create database api;
exit
```
## Visit Site and Api Endpoints

```
laravel.dev
api.laravel.dev
```
