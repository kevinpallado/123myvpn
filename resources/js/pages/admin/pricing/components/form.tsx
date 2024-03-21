import AdminLayout from '@/layouts/admin'
// icons
import { ReloadIcon } from "@radix-ui/react-icons"
// global components
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// inertia
import { useForm, usePage } from '@inertiajs/react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PricingForm() {
    const { pricing, saleList } = usePage<any>().props

    const { data, setData, post, put, processing, errors } = useForm({
        name: pricing ? pricing.name : "",
        sale_text: pricing ? pricing.sale_text : "",
        price_initial: pricing ? pricing.price_initial : "",
        price_per_data: pricing ? pricing.price_per_data : "",
        price_percentage_off: pricing ? pricing.price_percentage_off : false,
        data_min_gb: pricing ? pricing.data_min_gb : "",
        data_max_gb: pricing ? pricing.data_max_gb : "",
        data_step_gb: pricing ? pricing.data_step_gb : "",
        status: pricing ? pricing.status : false,
    })

    function submitForm(e: any) {
        e.preventDefault();

        pricing ? put(route('admin.pricing.update', pricing.id)) : post(route('admin.pricing.store'))
    }

    return (
        <AdminLayout pageTitle='Pricing Form'>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Pricing Plan</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Setup Pricing Plan Base on Data Consumption
                        </p>
                        <div className='mt-20'>
                            {Object.keys(errors).map((key) => (
                                <div key={key} className="border border-gray-500 rounded p-2 my-4 bg-emerald-400">
                                    <p className="text-black-500 font-bold leading-none">
                                        {(errors as any)[key]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Pricing Form Setup</CardTitle>
                                <CardDescription>This information for VPN data consumption pricing.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid">
                                        <div className="col-span-full">
                                            <Label htmlFor="name">
                                                Plan Pricing Name <span className='text-red-500 text-xl'>*</span>
                                            </Label>
                                            <div className="mt-2">
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                />
                                                {errors.name && <span className='text-sm text-red-500 font-medium leading-none'>This field is required.</span>}
                                            </div>
                                        </div>
                                        <Label className='mt-3' htmlFor="sale_text">
                                            Sale Text
                                        </Label>
                                        <div className="mt-3 flex align-middle col-span-full">
                                            <div className="flex items-center">
                                                <Checkbox id="sale_text" checked={data.price_percentage_off} onCheckedChange={e => setData('price_percentage_off', e)} />
                                                <div className="grid ml-2"> 
                                                    <label
                                                        htmlFor="sale_text"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Sale
                                                    </label>
                                                </div>
                                                <div className="ml-2"> 
                                                    <Input
                                                        type="text"
                                                        name="sale_text"
                                                        id="sale_text"
                                                        value={data.sale_text}
                                                        onChange={(e) => setData('sale_text', e.target.value)}
                                                        disabled={!data.price_percentage_off}
                                                    />
                                                </div>
                                            </div>
                                            {data.price_percentage_off == true && (
                                                <Label className='mt-3 ml-3 text-blue-500' htmlFor="sale_text">
                                                    Example: Save 5%
                                                </Label>
                                            )}
                                        </div>

                                        <Label htmlFor="price_initial">
                                            Initial Price <span className='text-red-500 text-xl'>*</span>
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                name="price_initial"
                                                id="price_initial"
                                                value={data.price_initial}
                                                onChange={(e) => setData('price_initial', e.target.value)}
                                            />
                                            {errors.price_initial && <span className='text-sm text-red-500 font-medium leading-none'>This field is required.</span>}
                                        </div>
                                        <Label htmlFor="price_per_data">
                                            Price per Data <span className='text-red-500 text-xl'>*</span>
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                name="price_per_data"
                                                id="price_per_data"
                                                value={data.price_per_data}
                                                onChange={(e) => setData('price_per_data', e.target.value)}
                                            />
                                            {errors.price_per_data && <span className='text-sm text-red-500 font-medium leading-none'>This field is required.</span>}
                                        </div>
                                        <Label htmlFor="data_min_gb">
                                            Minimum GB <span className='text-red-500 text-xl'>*</span>
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                name="data_min_gb"
                                                id="data_min_gb"
                                                value={data.data_min_gb}
                                                onChange={(e) => setData('data_min_gb', e.target.value)}
                                            />
                                            {errors.data_min_gb && <span className='text-sm text-red-500 font-medium leading-none'>This field is required.</span>}
                                        </div>
                                        <Label htmlFor="data_max_gb">
                                            Maximum GB <span className='text-red-500 text-xl'>*</span>
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                name="data_max_gb"
                                                id="data_max_gb"
                                                value={data.data_max_gb}
                                                onChange={(e) => setData('data_max_gb', e.target.value)}
                                            />
                                            {errors.data_max_gb && <span className='text-sm text-red-500 font-medium leading-none'>This field is required.</span>}
                                        </div>
                                        <Label htmlFor="data_step_gb">
                                            Data Step <span className='text-red-500 text-xl'>*</span>
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="number"
                                                name="data_step_gb"
                                                id="data_step_gb"
                                                value={data.data_step_gb}
                                                onChange={(e) => setData('data_step_gb', e.target.value)}
                                            />
                                            {errors.data_step_gb && <span className='text-sm text-red-500 font-medium leading-none'>This field is required.</span>}
                                        </div>
                                        <div className="mt-3 col-span-full">
                                            <div className="items-top flex space-x-2">
                                                <Checkbox id="status" checked={data.status} onCheckedChange={e => setData('status',e)} />
                                                <div className="grid gap-1.5 leading-none">
                                                    <label
                                                        htmlFor="status"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Activate
                                                    </label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Checking this one will set it's status to active.
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
