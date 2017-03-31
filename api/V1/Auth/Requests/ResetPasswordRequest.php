<?php

namespace Api\V1\Auth\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class ResetPasswordRequest extends FormRequest
{
    public function rules()
    {
        return Config::get('auth_scaffold.reset_password.validation_rules');
    }

    public function authorize()
    {
        return true;
    }
}