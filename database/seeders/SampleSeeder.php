<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
// models
use App\Models\UserSubscribers;

class SampleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaultUsers = [
            [
                'name' => 'User Sample 1',
                'email' => 'usersample@outlook.com',
                'password' => Hash::make('123qwe123'),
            ]
        ];

        foreach($defaultUsers as $users) {
            UserSubscribers::updateOrCreate(
                ['email' => $users['email']],
                $users
            );
        }
    }
}
