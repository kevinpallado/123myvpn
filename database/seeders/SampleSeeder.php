<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
// models
use App\Models\User;
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

        $adminUsers = [
            [
                'name' => 'Admin Developer',
                'email' => 'dev@123myvpn.com',
                'password' => Hash::make('palls123')
            ],
            [
                'name' => 'Behrouz Borji',
                'email' => 'bruce@123myvpn.com',
                'password' => Hash::make('bruce123myvpn')
            ]
        ];

        foreach($defaultUsers as $users) {
            UserSubscribers::updateOrCreate(
                ['email' => $users['email']],
                $users
            );
        }

        foreach($adminUsers as $users) {
            User::updateOrCreate(
                ['email' => $users['email']],
                $users
            );
        }
    }
}
