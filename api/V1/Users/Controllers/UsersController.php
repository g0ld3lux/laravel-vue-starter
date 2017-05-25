<?php 

namespace Api\V1\Users\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use Dingo\Api\Routing\Helpers;
use Api\V1\Users\Transformers\UserTransformer;

Class UsersController extends Controller
{
    use Helpers;

    public function __construct()
    {
        // You Should Enable api.auth middleware
        // This is Useful for Put Patch Delete 
        // For a user
        // $this->scopes(['read_user_data']);
    }

    public function index()
    {
        $users = User::all();
        // Use Collection Property for Collections
        return $this->collection($users, new UserTransformer);
    }
   /**   
    * Show User
    *
    * Get a JSON representation choosen user.
    *
    * @Get("/api/users/")
    * @Versions({"v1"})
    */
    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            // Use Item Property for Single Item to be Returned
            return $this->item($user, new UserTransformer);
        }catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e){

            $api=  app(\Dingo\Api\Http\Response\Factory::class);
          // Override the Custom Errors 
          return $api->errorNotFound("Requested resource with id={$id} where not found.");
        }

    }
}