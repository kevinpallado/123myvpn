import AdminLayout from '@/layouts/admin'
// icons
import { ReloadIcon } from "@radix-ui/react-icons"
import { Switch } from '@/components/ui/switch';
// global components
import { Button } from '@/components/ui/button'
import React from 'react';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// inertia
import { useForm, usePage } from '@inertiajs/react'
import { Checkbox } from '@/components/ui/checkbox'

export default function PricingForm() {
    const { pricing, period, currencyList } = usePage<any>().props

    const { data, setData, post, processing, errors } = useForm({
        plan_name: pricing ? pricing.plan_name: '',
        plan_amount: pricing ? pricing.plan_amount: '',
        currency: pricing ? pricing.currency: '',
        billing: pricing ? pricing.billing: '',
        status: pricing ? pricing.status: false
    })

    function submitForm(e: any) {
        e.preventDefault();

        post(route('admin.pricing.store'))
    }

    return (
        <AdminLayout pageTitle='Pricing Form'>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Pricing</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Setup pricing that will reflect in stripe
                        </p>
                    </div>

                    <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Pricing Form Setup</CardTitle>
                                <CardDescription>This information for VPN service pricing.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <Label htmlFor="plan_name">
                                                Plan Name
                                            </Label>
                                            <div className="mt-2">
                                                <Input
                                                    type="text"
                                                    name="plan_name"
                                                    id="plan_name"
                                                    value={data.plan_name}
                                                    onChange={e => setData('plan_name', e.target.value)}
                                                />
                                                {errors.plan_name && <span className='text-sm text-red-500 font-medium leading-none'>{errors.plan_name}</span>}
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <Label htmlFor="plan_amount">
                                                Amount
                                            </Label>
                                            <div className="mt-2">
                                                <Input
                                                    type="number"
                                                    name="plan_amount"
                                                    id="plan_amount"
                                                    value={data.plan_amount}
                                                    onChange={e => setData('plan_amount', e.target.value)}
                                                />
                                                {errors.plan_amount && <span className='text-sm text-red-500 font-medium leading-none'>{errors.plan_amount}</span>}
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <Label htmlFor="currency">
                                                Currency
                                            </Label>
                                            <div className="mt-2">
                                                <Select name="currency" value={data.currency} onValueChange={e => setData('currency', e)}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Currency" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {currencyList.map((value:any, key:number) => <SelectItem key={key} value={value}>{value}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                                {errors.currency && <span className='text-sm text-red-500 font-medium leading-none'>{errors.currency}</span>}
                                            </div>
                                        </div>

                                        <div className="col-span-full grid">
                                            <Label htmlFor="billing_method">
                                                Billing Period
                                            </Label>
                                            <div className="mt-2">
                                                <Select name="billing_method"
                                                    value={data.billing}
                                                    onValueChange={(e) => setData('billing', e)}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Billing Period" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {period.map((value:any, key:number) => <SelectItem key={key} value={value}>{value}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                                {errors.billing && <span className='text-sm text-red-500 font-medium leading-none'>{errors.billing}</span>}
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <div className="items-top flex space-x-2">
                                                <Checkbox id="status_" checked={data.status} onCheckedChange={(e) => setData('status',e)}/>
                                                <div className="grid gap-1.5 leading-none">
                                                    <label
                                                        htmlFor="status_"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Price Status
                                                    </label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Checking this one will set the price into active state.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" disabled={processing}>
                                    {processing && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                                    Save
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}
