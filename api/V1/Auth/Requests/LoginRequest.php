<?php

namespace Api\V1\Auth\Requests;

use Dingo\Api\Http\FormRequest;
use Config;

class LoginRequest extends FormRequest
{
    public function rules()
    {
        return  Config::get('auth_scaffold.login.validation_rules');
    }

    public function authorize()
    {
        return true;
    }
}