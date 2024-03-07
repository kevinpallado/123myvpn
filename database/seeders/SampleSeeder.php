<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
// models
use App\Models\PlanPricing;
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

        $planPricing = [
            [
                'name' => 'Starts from 10 GB',
                'price_initial' => 1,
                'price_per_data' => 1,
                'data_min_gb' => 10,
                'data_max_gb' => 30,
                'data_step_gb' => 10,
                'status' => true
            ],
            [
                'name' => 'Starts from 40 GB',
                'sale_text' => 'Save 5%',
                'price_initial' => 3.8,
                'price_per_data' => 1,
                'price_percentage_off' => 5,
                'data_min_gb' => 40,
                'data_max_gb' => 70,
                'data_step_gb' => 10,
                'status' => true
            ],
            [
                'name' => 'Starts from 80 GB',
                'sale_text' => 'Save 10%',
                'price_initial' => 7.2,
                'price_per_data' => 1,
                'price_percentage_off' => 10,
                'data_min_gb' => 80,
                'data_max_gb' => 110,
                'data_step_gb' => 10,
                'status' => true
            ],
            [
                'name' => 'Starts from 120 GB',
                'sale_text' => 'Save 15%',
                'price_initial' => 10.8,
                'price_per_data' => 1,
                'price_percentage_off' => 15,
                'data_min_gb' => 120,
                'data_step_gb' => 10,
                'status' => true
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

        foreach($planPricing as $plans) {
            PlanPricing::updateOrCreate(
                ['name' => $plans['name']],
                $plans
            );
        }
    }
}
