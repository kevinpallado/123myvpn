"use client"

import { ColumnDef } from "@tanstack/react-table"
// global components
import { Button } from "@/components/ui/button"
// react
import { router } from "@inertiajs/react"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SubscriberInterface = {
    id: string
    name: string
    email: string
    created_at: string
    updated_at: string
}

export const columns: ColumnDef<SubscriberInterface>[] = [
    {
        header: "Name",
        cell: ({ row }) => {
            return <div>
                <div className="text-md font-semibold">
                    {row.original.name}
                </div>
            </div>
        }
    },
    {
        header: "Email",
        cell: ({ row }) => {
            return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {row.original.email}
            </code>
        }
    },
    {
        accessorKey: "updated_at",
        header: "Time Updated",
    },
    {
        header: "Action",
        cell: ({ row }) => {
            return <>
                <Button className="mr-2" variant='destructive' onClick={(e) => router.visit(route('admin.subscribers.show', { subscriber: row.original.id, action: 'vpn-access' }))}>
                    VPN Access
                </Button>
                <Button className="mr-2" onClick={(e) => router.visit(route('admin.subscribers.edit', row.original.id))}>
                    Edit
                </Button>
            </>
        }
    },
]
