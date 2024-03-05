<?php

namespace App\Http\Requests\Admin\Pricing;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->guard('admin')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'plan_name' => 'required|max:255',
            'plan_amount' => 'required|max:255',
            'currency' => 'required|max:255',
            'billing' => 'required|max:255',
        ];
    }
}
