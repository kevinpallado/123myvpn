"use client"

import { Badge } from '@/components/ui/badge';
import { ColumnDef } from "@tanstack/react-table"
import { router } from '@inertiajs/react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PricingInterface = {
    id: string
    name: string
    sale_text: string
    price_initial: number
    price_per_data: number
    price_percentage_off: number
    data_min_gb: number
    data_max_gb: number
    data_step_gb: number
    status: boolean
    updated_at: string
}

export const columns: ColumnDef<PricingInterface>[] = [
    {
        header: "Package Name",
        cell: ({ row }) => {
            return <div>
                <small className="text-lg font-medium text-primary underline underline-offset-4 cursor-pointer" onClick={e => router.visit(route('admin.pricing.edit', row.original.id))}>
                    {row.original.name}
                </small><br/>
                <small className="text-sm font-medium leading-none">
                    {row.original.sale_text ? row.original.sale_text : 'No Percentage Off'}
                </small><br/>
                <small className="text-xs font-medium leading-none">
                    <i>Date Last Updated: {row.original.updated_at}</i>
                </small>
            </div>
        }
    },
    {
        header: "Initial Price",
        cell: ({ row }) => {
            return <div>
                <div className="text-md">
                    ${row.original.price_initial}
                </div>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    Price Per ${row.original.price_per_data}/gb
                </code>
            </div>
        }
    },
    {
        header: "Min & Max Data Cap",
        cell: ({ row }) => {
            return <div>
                <div className="text-md">
                    Min {row.original.data_min_gb}gb
                </div>
                <div className="text-md">
                    Max {row.original.data_max_gb ? `${row.original.data_max_gb}gb` : 'Unlimited'}
                </div>
            </div>
        }
    },
    {
        header: "Data Step",
        cell: ({ row }) => `${row.original.data_step_gb}/gb`
    },
    {
        header: "Status",
        cell: ({ row }) => {
            return (row.original.status ? <Badge>
                Active
            </Badge> : <Badge variant='destructive'>
                In-Active
            </Badge>)
        }
    },
]
