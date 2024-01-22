import AdminLayout from '@/layouts/admin'
// global components
import { Button } from '@/components/ui/button';
// local components
import { PricingInterface, columns } from "./columns"
import { DataTable } from "./data-table"
import { router, usePage } from '@inertiajs/react';


export default function Pricing() {
    const { pricing } = usePage<any>().props;

    return (
        <AdminLayout pageTitle='Pricing'>
            <div className="container mx-auto py-10">
                <div className="mb-3 flex justify-end">
                    <Button onClick={(e) => router.get(route('admin.pricing.create'))}>
                        Add New Pricing
                    </Button>
                </div>
                <DataTable columns={columns} data={pricing} />
            </div>
        </AdminLayout>
    )
}