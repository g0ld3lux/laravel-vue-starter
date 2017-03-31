<?php

namespace App\Mutators;
use Keygen;

trait UserMutator
{
   public function setEmailAttribute($email)
    {
        // Ensure valid email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception("Invalid email address.");
        }

        // Ensure email does not exist
        elseif (static::whereEmail($email)->count() > 0) {
            throw new \Exception("Email already exists.");
        }

        $this->attributes['email'] = $email;
    }
    public function setUsernameAttribute($username)
    {
        if(static::whereUsername($username)->count() > 0){
            throw new \Exception("Username already exists.");
        }
        // Make Username Lowercase plus Use Underscore on spaces
        $this->attributes['username'] = strtolower(str_replace(' ', '_', $username));
    }
    public function setIdAttribute($id)
    {
        if(static::whereId($id)->count() > 0){
            throw new \Exception("Id already exists.");
        }
        $this->attributes['id'] = $id;
    }

    public function setCodeAttribute($code)
    {
        if(static::whereCode($code)->count() > 0){
            throw new \Exception("Code already exists.");
        }
        $this->attributes['code'] = $code;
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    private static function generateID()
    {
       return Keygen::numeric(14)->prefix(mt_rand(1, 9))->generate(true);
    }
    
    public static function generateUniqueID()
    {
    $id = self::generateID();

    // Ensure ID does not exist
    // Generate new one if ID already exists
    while (self::whereId($id)->count() > 0) {
        $id = self::generateID();
    }

    return $id;
    }
    public function getFirstNameAttribute($firstname)
    {
        return ucwords($firstname);
    }

    public function getLastNameAttribute($lastname)
    {
        return ucwords($lastname);
    }
    public static function generateUniqueCode()
    {
    $code = self::generateCode();
    while (self::whereCode($code)->count() > 0) {
        $code = self::generateCode();
    } 
    return $code;
    }

    private static function generateCode()
    {
        return Keygen::bytes()->generate(
        function($key) {
            // Generate a random numeric key
            $random = Keygen::numeric()->generate();

            // Manipulate the random bytes with the numeric key
            return substr(md5($key . $random . strrev($key)), mt_rand(0,8), 20);
        },
        function($key) {
            // Add a (-) after every fourth character in the key
            return join('-', str_split($key, 4));
        },
        'strtoupper'
    );
    }

    public static function findByUsername($username)
    {
        return self::whereUsername($username)->firstOrFail();
    }

    public static function findByEmail($email)
    {
        return self::whereEmail($email)->firstOrFail();
    }

    public static function findByCode($code)
    {
        return self::whereCode($code)->firstOrFail();
    }

    public function getJWTIdentifier()
    {
        return $this->getKey(); 
    }

    public function getJWTCustomClaims()
    {
        return [
             'user' => [ 
                'id' => $this->id,
             ]
        ];
    }

    public function scopeWhereCan($query, $ability)
    {
    $query->where(function ($query) use ($ability) {
        // direct
        $query->whereHas('abilities', function ($query) use ($ability) {
            $query->byName($ability);
        });
        // through roles
        $query->orWhereHas('roles', function ($query) use ($ability) {
             $query->whereHas('abilities', function ($query) use ($ability) {
                 $query->byName($ability);
             });
         });
     });
    }
}
