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

export default function PricingForm() {
    const { pricing } = usePage<any>().props

    const { data, setData, post, processing, errors } = useForm({
        name: pricing ? pricing.name : "",
        sale_text: pricing ? pricing.sale_text : "",
        price_initial: pricing ? pricing.price_initial : "",
        price_per_data: pricing ? pricing.price_per_data : "",
        price_percentage_off: pricing ? pricing.price_percentage_off : "",
        data_min_gb: pricing ? pricing.data_min_gb : "",
        data_max_gb: pricing ? pricing.data_max_gb : "",
        data_step_gb: pricing ? pricing.data_step_gb : "",
        status: pricing ? pricing.status : "",
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
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Pricing Plan</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Setup Pricing Plan Base on Data Consumption
                        </p>
                    </div>

                    <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Pricing Form Setup</CardTitle>
                                <CardDescription>This information for VPN data consumption pricing.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                
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
