import AdminLayout from '@/layouts/admin'
// global components
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/datatable/datatable';
// local components
import { columns } from "./columns"
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
                <DataTable columns={columns} links={pricing.links} meta={pricing.meta} data={pricing.data} />
            </div>
        </AdminLayout>
    )
}