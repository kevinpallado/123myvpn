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
            'name' => 'string|required|max:255',
            'price_initial' => 'numeric|required|max:255',
            'price_per_data' => 'numeric|required|max:255',
            'data_min_gb' => 'integer|required|max:255',
            'data_max_gb' => 'integer|required|max:255',
            'data_step_gb' => 'integer|required|max:255',
        ];
    }
}
