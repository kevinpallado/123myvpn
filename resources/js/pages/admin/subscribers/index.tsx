import AdminLayout from '@/layouts/admin'
// global components
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/datatable/datatable';
// local components
import { columns } from "./columns"
import { router, usePage } from '@inertiajs/react'
import { useState } from 'react';

export default function Subscribers() {
    const { subscribers } = usePage<any>().props
    
    return (
        <AdminLayout pageTitle='Subscribers'>
            <div className="container mx-auto py-10">
                <div className="mb-3 flex justify-end">
                    <Button onClick={(e) => router.get(route('admin.subscribers.create'))}>
                        Add New Subscriber
                    </Button>
                </div>
                <DataTable columns={columns} links={subscribers.links} meta={subscribers.meta} data={subscribers.data} />
            </div>
        </AdminLayout>
    )
}