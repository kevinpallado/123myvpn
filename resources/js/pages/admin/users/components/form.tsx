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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
// local components
// inertia
import { useForm, usePage } from '@inertiajs/react'


export default function SubscriberForm() {
    const { users } = usePage<any>().props
    
    // form props setup
    const { data, setData, post, put, processing, errors } = useForm({
        name: users ? users.name : '',
        email: users ? users.email : '',
        password: '',
    })

    function submitForm(e: any) {
        e.preventDefault();

        users ? put(route('admin.users.update', users.id)) : post(route('admin.users.store'))
    }

    return (
        <AdminLayout pageTitle='Users Form'>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Subscribers</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Users will be the one to use the service.
                        </p>
                    </div>

                    <form method="POST" onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Users Form</CardTitle>
                                <CardDescription>User personal information.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid max-w-4xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <Label htmlFor="name">
                                            Full Name
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <Label htmlFor="email">
                                            Email
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="email"
                                                name="email"
                                                id="email"
                                                title="Example: sample@gmail.com"
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <div className="mt-2">
                                            <Input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={data.password}
                                                onChange={e => setData('password', e.target.value)}
                                            />
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
