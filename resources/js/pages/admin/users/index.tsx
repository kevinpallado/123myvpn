import AdminLayout from '@/layouts/admin';
// global components
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/datatable/datatable';
// local components
import { columns } from './columns';
import { router, usePage } from '@inertiajs/react';

export default function Users() {
    const { users } = usePage<any>().props;

    return (
        <AdminLayout pageTitle="Users">
            <div className="container mx-auto py-10">
                <div className="mb-3 flex justify-end">
                    <Button onClick={(e) => router.get(route('admin.users.create'))}>Add New User</Button>
                </div>
                <DataTable columns={columns} links={users.links} meta={users.meta} data={users.data} />
            </div>
        </AdminLayout>
    );
}
