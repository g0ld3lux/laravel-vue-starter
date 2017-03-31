<?php

namespace Api\V1\Auth\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    public function rules()
    {
        return Config::get('auth_scaffold.sign_up.validation_rules');
    }

    public function authorize()
    {
        return true;
    }
}