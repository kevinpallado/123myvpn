<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Throwable;
// exceptions
use App\Exceptions\APIResponseError;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->renderable(function (APIResponseError $e) {
            return response()->json(['message' => $e->getMessage()], $e->getCode());
        });

        $this->renderable(function (NotFoundHttpException $e) {
            return response()->json(['message' => 'Data not found. Please check your request'], 404);
        });
        $this->renderable(function (RouteNotFoundException $e) {
            return response()->json(['message' => 'Not allowed'], 404);
        });
    }
}
