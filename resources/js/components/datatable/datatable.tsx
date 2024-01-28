import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    // getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { router, usePage } from "@inertiajs/react";
import { useState } from 'react';

interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<[]>;
    path: string;
    per_page: string;
    to: number;
    total: number;
}

interface PaginationLinks {
    first: string;
    last: string;
    next: string;
    prev: string;
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    links,
    meta,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
    });

    const [dataTableRows, setDataTableRows] = useState(localStorage.getItem('dataTableSetRow') ? localStorage.getItem('dataTableSetRow') : 10);

    return (
        <div>
            {/* Table */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between px-2 mt-2">
                <div className="flex-1 text-sm text-muted-foreground">
                    {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected. */}
                </div>
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">Rows per page</p>
                        <Select
                            value={dataTableRows ? dataTableRows.toString() : meta.per_page}
                            onValueChange={(value: any) => {
                                setDataTableRows(value)
                                localStorage.setItem('dataTableSetRow', value);
                                router.get(`${meta.path}?page=${meta.current_page}&rows=${value}`)
                            }}
                        >
                            <SelectTrigger className="h-8 w-[70px]">
                                <SelectValue placeholder={meta.per_page} />
                            </SelectTrigger>
                            <SelectContent side="top">
                                {["10", "20", "30", "40", "50"].map((pageSize) => (
                                    <SelectItem
                                        key={pageSize}
                                        value={`${pageSize}`}
                                    >
                                        {pageSize}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                        Page {meta.current_page} of {meta.last_page}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            className="hidden h-8 w-8 p-0 lg:flex"
                            onClick={() => dataTableRows == 0 ? router.get(links.first) : router.get(`${links.first}&rows=${dataTableRows}`)}
                            disabled={links.first && !links.prev ? true : false}
                        >
                            <span className="sr-only">Go to first page</span>
                            <DoubleArrowLeftIcon className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => dataTableRows == 0 ? router.get(links.prev) : router.get(`${links.prev}&rows=${dataTableRows}`)}
                            disabled={!links.prev}
                        >
                            <span className="sr-only">Go to previous page</span>
                            <ChevronLeftIcon className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => {
                                console.log(dataTableRows)
                                dataTableRows == 0 ? router.get(links.next) : router.get(`${links.next}&rows=${dataTableRows}`)
                            }}
                            disabled={!links.next}
                        >
                            <span className="sr-only">Go to next page</span>
                            <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="hidden h-8 w-8 p-0 lg:flex"
                            onClick={() => dataTableRows == 0 ? router.get(links.last) : router.get(`${links.next}&rows=${dataTableRows}`)}
                            disabled={links.last && !links.next ? true : false}
                        >
                            <span className="sr-only">Go to last page</span>
                            <DoubleArrowRightIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
