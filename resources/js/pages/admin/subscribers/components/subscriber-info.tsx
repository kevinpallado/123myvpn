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
// utils
import { useForm, usePage } from '@inertiajs/react'

export default function SubscriberInfo() {
    const { subscriber } = usePage<any>().props
    // form props setup
    const { data, setData, post, put, processing, errors } = useForm({
        name: subscriber ? subscriber.name : '',
        email: subscriber ? subscriber.email : '',
        password: '',
    })

    function submitForm(e: any) {
        e.preventDefault();
        subscriber ? put(route('admin.subscribers.update', subscriber.id)) : post(route('admin.subscribers.store'))
    }

    return <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <Card>
            <CardHeader>
                <CardTitle>Subscribers Form</CardTitle>
                <CardDescription>User personal information.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid">
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
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
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

}