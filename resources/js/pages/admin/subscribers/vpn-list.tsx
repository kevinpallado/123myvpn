import AdminLayout from "@/layouts/admin";
// global components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
// local components
import VPNAccessForm from "./components/vpn-access-form";
// utilities
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function VPNList() {
    const { vpnAccess } = usePage<any>().props
    // variables
    const [showForm, setShowForm] = useState(false)
    const [selectedData, setSelectedData] = useState({})

    return (
        <AdminLayout pageTitle='VPN Access'>
            <VPNAccessForm formStatus={showForm} formAction={setShowForm} accessData={selectedData} />
            <div className="container mx-auto py-10">
                <div className="mb-3 flex justify-end">
                    <Button onClick={e => setShowForm(true)}>
                        Add New Access
                    </Button>
                </div>
                <Table>
                    <TableCaption>User Subscriber VPN Server list of access.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Server Details</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date Connected</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vpnAccess.length > 0 ? vpnAccess.map((access: any) => <TableRow>
                            <TableCell className="font-medium">
                                {access.name}<br />
                                {access.location_server}<br />
                                {access.location_code}<br />
                            </TableCell>
                            <TableCell>
                                {access.vpn_value ? <Badge className="mb-2">
                                    Show Config Value
                                </Badge> : <Badge className="mb-2" variant='destructive'>
                                    No Configuration
                                </Badge>}<br />
                                {access.recommended && <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                    Recommended Server
                                </code>}
                            </TableCell>
                            <TableCell>{access.created_at}</TableCell>
                            <TableCell className="text-right">
                                <Button>
                                    Edit Access
                                </Button>
                            </TableCell>
                        </TableRow>) : <TableRow>
                            <TableCell className="text-center" colSpan={4}>No Current Access</TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    )
}