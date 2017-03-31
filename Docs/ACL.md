
## ACL 

#### Uses JWT as Default Driver for Auth User
```
App\Http\Controllers\Auth

 - LoginController

```

Note: Auth User is Using JWT by Default... users auth:api Middleware


#### Roles Abilities Middlewares
Add Roles to User
```
Bouncer::assign('admin')->to($user);
or 
$user->assign('admin')
```

Add Abilities to User
```
\Bouncer::allow($user)->to('view-dashboard');
or
$user->allow('view-dashboard');
or 
\Bouncer::allow('owner')->to('*', $post);
```

Abilities and Roles Middleware (Default is Non Strict)

```
$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
     $api->group(['middleware' => ['roles'],
     'roles' => ['admin','manager'],
    'rolesStrict' => true,
    'prefix' => 'admin'
     ]
     , function ($api) {
         $api->get('/', function(){
        return 'Im a user with Admin and Manager Role';});
    });
    $api->group(['middleware' => ['jwt.auth', 'abilities'],
     'abilities' => ['view-dashboard', 'login'],
    'abilitiesStrict' => true,
    'prefix' => 'abilities'
     ]
     , function ($api) {
         $api->get('/', function(){
        return 'I can view Dashboard and Login!';});
    });
});
```

#### Using Authorize Middleware
Can be used with a simple ability:
```
Route::group(['middleware' => 'can:access-dashboard'], function () {
    // Dashboard routes...
});
```

Can be used on a single model
It will pull the $user model from the route.
```
Route::get('users/{user}', 'UserController@show')->middleware('can:view,user');
```
 it can be used on a model type
 ```
Route::get('users', 'UserController@index')->middleware('can:view,'.User::class);
 ```
A new AuthorizesResources trait
```
class UsersController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource('user', User::class);
    }
}
```
#### Retracting Roles From Set of Users

```
Bouncer::retract('admin')->from(User::pluck('id')->all());
Or much Efficient Way
Bouncer::retract('admin')->from(User::whereIs('admin')->pluck('id')->all());
```


#### Retracting All Roles From a User

```
$user->roles->each(function ($role) {
    $user->retract($role);
});
```

#### WildCards
```
// This Will Give You All Abililities No restriction in your Account
Bouncer::allow($user)->everything();
// This Will Allow You to Manage Specific Post
Bouncer::allow($user)->toManage($post);
// Allows You to Manage the Whole Post Class
Bouncer::allow($user)->toManage(Post::class);
// Allows User to Give Specific Abilities to Any Models
Bouncer::allow($user)->toAlways('view');
```

#### Assigning Specific Model to User
```
// All Permissions
Bouncer::allow($user)->toOwn(User::class);
// With Specific Permission
\Bouncer::allow($user)->toOwn(User::class,['view','update']);
```