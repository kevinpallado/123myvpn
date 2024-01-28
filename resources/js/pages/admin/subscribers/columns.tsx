"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { router } from "@inertiajs/react"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PricingInterface = {
    id: string
    name: string
    email: string
    created_at: string
    updated_at: string
}

export const columns: ColumnDef<PricingInterface>[] = [
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
                <Button className="mr-2" onClick={(e) => router.visit(route('admin.subscribers.edit', row.original.id))}>
                    Edit
                </Button>
                <Button variant="destructive" className="mr-2">
                    Manage Subscription
                </Button>
            </>
        }
    },
]
