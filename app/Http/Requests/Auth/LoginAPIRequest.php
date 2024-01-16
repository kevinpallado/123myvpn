<?php

namespace App\Http\Requests\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
// models
use App\Models\UserSubscribers;
use App\Exceptions\APIResponseError;

class LoginAPIRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email:rfc,dns',
            'password' => 'required',
        ];
    }

    public function authenticate(): void
    {
        $subscriber = UserSubscribers::where('email', $this->email)->firstOrFail();

        if(!Hash::check($this->password, $subscriber->password)) {
            throw APIResponseError::apiErrorMessages([
                'message' => 'Email and password did not match',
                'code' => 401
            ]);
        }
    }
}
