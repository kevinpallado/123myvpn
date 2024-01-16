<?php

namespace App\Exceptions;

use Exception;

class APIResponseError extends Exception
{
    public static function apiErrorMessages($errorMessages) {
        return new self($errorMessages['message'], $errorMessages['code']);
    }
}
