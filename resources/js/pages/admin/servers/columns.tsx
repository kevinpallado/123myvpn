'use client';

import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';

import { Button } from "@/components/ui/button"
import { router } from "@inertiajs/react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ServerInterface = {
    id: string;
    name: string;
    ip_address: string;
    location: number;
    vpn_value: string;
    server_location: string;
};

export const columns: ColumnDef<ServerInterface>[] = [
    {
        accessorKey: 'name',
        header: 'Server Name'
    },
    {
        header: 'Location',
        cell: ({ row }) => {
            return (
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {row.original.location}
                </code>
            );
        }
    },
    {
        accessorKey: 'ip_address',
        header: 'IP Address',
        cell: ({ row }) => {
            return row.original.ip_address.toUpperCase();
        }
    },
    {
        header: 'Server Region',
        cell: ({ row }) => {
            return <Badge>
                {row.original.server_location}
            </Badge>;
        }
    },
    {
        header: "Action",
        cell: ({ row }) => {
            return <>
                <Button className="mr-2" onClick={(e) => router.visit(route('admin.servers.edit', row.original.id))}>
                    Edit
                </Button>
                <Button variant="destructive" onClick={() => {
                    if (confirm('Are you sure you want to delete this server?')) {
                        const form = document.createElement('form');
                        form.method = 'POST';
                        form.action = `/admin/servers/${row.original.id}`;
                        
                        // Method spoofing for DELETE request
                        const methodInput = document.createElement('input');
                        methodInput.type = 'hidden';
                        methodInput.name = '_method';
                        methodInput.value = 'DELETE';
                        form.appendChild(methodInput);
                        
                        const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
                        const csrfToken = csrfTokenElement ? csrfTokenElement.getAttribute('content') : '';
                        const csrfInput = document.createElement('input');
                        csrfInput.type = 'hidden';
                        csrfInput.name = '_token'; 
                        csrfInput.value = csrfToken || ''; 
                        form.appendChild(csrfInput); 
                                                
                        document.body.appendChild(form);
                        form.submit();
                    }
                }}>
                    Delete
                </Button>
            </>
        }
    },
];
