'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from "@/components/ui/button"
import { router } from "@inertiajs/react"
import axios from 'axios';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserInterface = {
    id: string;
    name: string;
    email: string;
    password: number;
};

export const columns: ColumnDef<UserInterface>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        header: "Action",
        cell: ({ row }) => {
            return <>
                <Button onClick={() =>
                                router.get(
                                    route("admin.users.edit", {
                                        user: row.original.id,
                                        action: "users",
                                    })
                                )
                            }>
                    Edit
                </Button>
                <Button variant="destructive" onClick={() => {
                    if (confirm('Are you sure you want to delete this user?')) {
                        const form = document.createElement('form');
                        form.method = 'POST';
                        form.action = `/admin/users/${row.original.id}`;
                        
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
