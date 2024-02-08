import AdminLayout from '@/layouts/admin';
// global components
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/datatable/datatable';
// local components
import { columns } from './columns';
import { router, usePage } from '@inertiajs/react';

export default function Servers() {
    const { servers } = usePage<any>().props;

    return (
        <AdminLayout pageTitle="Server">
            <div className="container mx-auto py-10">
                <div className="mb-3 flex justify-end">
                    <Button onClick={(e) => router.get(route('admin.servers.create'))}>Add New Server</Button>
                </div>
                <DataTable columns={columns} links={servers.links} meta={servers.meta} data={servers.data} />
            </div>
        </AdminLayout>
    );
}
