"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PricingInterface = {
    id: string
    name: string
    pricing_id: string
    billing_method: string
    price: number
    currency: string
    created_at: string
    updated_at: string
}

export const columns: ColumnDef<PricingInterface>[] = [
    {
        header: "Package Name",
        cell: ({ row }) => {
            return <div>
                <div className="text-lg font-semibold">
                    {row.original.name}
                </div>
                <small className="text-sm font-medium leading-none">
                    ${row.original.price}
                </small>

            </div>
        }
    },
    {
        header: "Stripe Ref#",
        cell: ({ row }) => {
            return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {row.original.pricing_id}
            </code>
        }
    },
    {
        accessorKey: "currency",
        header: "Currency",
        cell: ({ row }) => {
            return (row.original.currency).toUpperCase()
        }
    },
    {
        accessorKey: "updated_at",
        header: "Time Updated",
    },
]
