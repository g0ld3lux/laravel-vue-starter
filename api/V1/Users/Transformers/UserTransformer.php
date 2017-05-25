<?php

namespace Api\V1\Users\Transformers;

use App\Models\Auth\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{

    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(User $user)
    {
        return [
            'id'            => (int) $user->id,
            'sp_id'         => (int) $user->sp_id,
            'code'          => $user->code,
            'first_name'    => ucwords($user->first_name),
            'last_name'     => ucwords($user->last_name),
            'email'         => $user->email,
            'username'      => $user->username,
            'verified'      => (bool) $user->verified,
            'activated'     => (bool) $user->activated,
            'banned'        => (bool) $user->banned,
            'on_trial'      => (bool) $user->on_trial,
            'subscribed'    => (bool) $user->subscribed,
            'resent'        => (int) $user->resent,
            'settings'      => (array) $user->settings
        ];
    }

}