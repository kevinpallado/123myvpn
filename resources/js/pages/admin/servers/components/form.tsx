import AdminLayout from '@/layouts/admin'
// icons
import { ReloadIcon } from "@radix-ui/react-icons"
// global components
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// local components
// inertia
import { useForm, usePage } from '@inertiajs/react'

export default function SubscriberForm() {
    const { servers, countryServers } = usePage<any>().props
    // form props setup
    const { data, setData, post, put, processing, errors } = useForm({
        name: servers ? servers.name : '',
        ip_address: servers ? servers.ip_address : '',
        vpn_value: servers ? servers.vpn_value : '',
        location: servers ? servers.server_location : '',
        recommended: servers ? servers.recommended : false
    })

    function submitForm(e: any) {
        e.preventDefault();

        servers ? put(route('admin.servers.update', servers.id)) : post(route('admin.servers.store'))
    }


    return (
        <AdminLayout pageTitle='Servers Form'>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Servers</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Servers that are on service.
                        </p>
                    </div>

                    <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Server Form Setup</CardTitle>
                                <CardDescription>This information for VPN servers service.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <Label htmlFor="name">Server Name</Label>
                                        <div className="mt-2">
                                            <Input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            {errors.name && <span className='text-sm text-red-500 font-medium leading-none'>{errors.name}</span>}
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <Label htmlFor="ip_address">IP Address</Label>
                                        <div className="mt-2">
                                            <Input
                                                type="text"
                                                name="ip_address"
                                                id="ip_address"
                                                pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                                                placeholder="Enter a Valid IP Address"
                                                title='Example: 192.168.1.1'
                                                value={data.ip_address}
                                                onChange={(e) => setData('ip_address', e.target.value)}
                                            />
                                            {errors.ip_address && <span className='text-sm text-red-500 font-medium leading-none'>{errors.ip_address}</span>}
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <Label htmlFor="vpn_value">VPN Value</Label>
                                        <div className="mt-2">
                                            <Textarea
                                                name="vpn_value"
                                                id="vpn_value"
                                                value={data.vpn_value}
                                                onChange={(e) => setData('vpn_value', e.target.value)}
                                            />
                                            {errors.vpn_value && <span className='text-sm text-red-500 font-medium leading-none'>{errors.vpn_value}</span>}
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <div className="items-top flex space-x-2">
                                            <Checkbox id="recommended_server" checked={data.recommended} onCheckedChange={e => setData('recommended',e)} />
                                            <div className="grid gap-1.5 leading-none">
                                                <label
                                                    htmlFor="recommended_server"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Recommended Server
                                                </label>
                                                <p className="text-sm text-muted-foreground">
                                                    Checking this one will auto connect consumers to this servers
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <Label htmlFor="location">Location</Label>
                                        <div className="mt-2">
                                            <Select
                                                name="location"
                                                value={data.location}
                                                onValueChange={(e) => setData('location', e)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Server Location" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {countryServers.map((value:any, key:number) => <SelectItem key={key} value={value}>{value}</SelectItem>)}
                                                </SelectContent>
                                                {errors.location && <span className='text-sm text-red-500 font-medium leading-none'>{errors.location}</span>}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Button type="submit" disabled={processing}>
                                    {processing && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                                    Save
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}
