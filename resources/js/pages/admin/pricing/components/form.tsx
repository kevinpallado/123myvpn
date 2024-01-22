import AdminLayout from '@/layouts/admin'
// icons
import { ReloadIcon } from "@radix-ui/react-icons"
// global components
import { Button } from '@/components/ui/button'
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
import { useForm } from '@inertiajs/react'

export default function Example() {
    const { data, setData, post, processing, errors } = useForm({
        plan_name: '',
        plan_amount: '',
        currency: 'USD',
        billing: 'month'
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
                            This information will be displayed publicly and what will the VPN service pricing.
                        </p>
                    </div>

                    <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <div className="px-4 py-6 sm:p-8">
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
                                                <SelectItem value="USD">US Dollar</SelectItem>
                                                <SelectItem value="CAD">Canadian Dollar</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <Label htmlFor="billing_period">
                                        Billing Period
                                    </Label>
                                    <div className="mt-2">
                                        <Select name="billing_period" value={data.billing} onValueChange={e => setData('billing', e)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Billing Period" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="month">Monthly Period</SelectItem>
                                                <SelectItem value="year">Yearly Period</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                            <Button type="submit" disabled={processing}>
                                {processing && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}
