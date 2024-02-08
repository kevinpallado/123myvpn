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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// local components
// inertia
import { useForm, usePage } from '@inertiajs/react'

export default function SubscriberForm() {
    const { servers } = usePage<any>().props

    // form props setup
    const { data, setData, post, put, processing, errors } = useForm({
        name: servers ? servers.name : '',
        ip_address: servers ? servers.ip_address : '',
        vpn_value: servers ? servers.vpn_value : '',
        location: servers ? servers.location : '',
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
                                <CardTitle>Servers Form</CardTitle>
                                <CardDescription>Servers information.</CardDescription>
                            </CardHeader>
                            <CardHeader>
                                <CardTitle>Server Form Setup</CardTitle>
                                <CardDescription>This information for VPN servers service.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <Label htmlFor="name">Server Name</Label>
                                        <div className="mt-2">
                                            <Input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                            />
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
                                                required
                                            />
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
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <Label htmlFor="location">Location</Label>
                                        <div className="mt-2">
                                            <Select
                                                name="location"
                                                value={data.location}
                                                onValueChange={(e) => setData('location', e)}
                                                required>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Server Location" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="us-east-2">US East (Ohio) (us-east-2)</SelectItem>
                                                    <SelectItem value="us-east-1">US East (N. Virginia) (us-east-1)</SelectItem>
                                                    <SelectItem value="us-west-2">US West (Oregon) (us-west-2)</SelectItem>
                                                    <SelectItem value="ap-south-1">Asia Pacific (Mumbai) (ap-south-1)</SelectItem>
                                                    <SelectItem value="ap-northeast-2">
                                                        Asia Pacific (Seoul) (ap-northeast-2)
                                                    </SelectItem>
                                                    <SelectItem value="ap-southeast-1">
                                                        Asia Pacific (Singapore) (ap-southeast-1)
                                                    </SelectItem>
                                                    <SelectItem value="ap-southeast-2">
                                                        Asia Pacific (Sydney) (ap-southeast-2)
                                                    </SelectItem>
                                                    <SelectItem value="ap-northeast-1">
                                                        Asia Pacific (Tokyo) (ap-northeast-1)
                                                    </SelectItem>
                                                    <SelectItem value="ca-central-1">Canada (Central) (ca-central-1)</SelectItem>
                                                    <SelectItem value="eu-central-1">EU (Frankfurt) (eu-central-1)</SelectItem>
                                                    <SelectItem value="eu-west-1">EU (Ireland) (eu-west-1)</SelectItem>
                                                    <SelectItem value="eu-west-2">EU (London) (eu-west-2)</SelectItem>
                                                    <SelectItem value="eu-west-3">EU (Paris) (eu-west-3)</SelectItem>
                                                    <SelectItem value="eu-north-1">EU (Stockholm) (eu-north-1)</SelectItem>
                                                </SelectContent>
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
