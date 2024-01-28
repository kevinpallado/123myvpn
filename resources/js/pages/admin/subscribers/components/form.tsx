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
import PaymentCards from './payment-cards'
// inertia
import { useForm, usePage } from '@inertiajs/react'
import { useState } from 'react'

export default function SubscriberForm() {
    const subscriber: any | undefined = usePage().props
    // constants
    const [cardNumberValue, setCardNumberValue] = useState<string>('');
    const [cardTypeValue, setCardTypeValue] = useState<string>('');
    // form props setup
    const { data, setData, post, put, processing, errors } = useForm({
        name: subscriber.name,
        email: subscriber.email,
        password: '',
    })

    const cardForm = useForm({
        card_number: '',
        card_type: '',
        card_expiry: '',
        card_cvc: '',
        action: "card-info"
    });

    function submitForm(e: any) {
        e.preventDefault();

        !subscriber ? put(route('admin.subscribers.update', subscriber.id)) : post(route('admin.subscribers.store'))
    }

    function submitPaymentMethod(e: any) {
        e.preventDefault();
        cardForm.data.card_number = cardNumberValue
        cardForm.data.card_type = cardTypeValue
        
        
    }


    return (
        <AdminLayout pageTitle='Subscribers Form'>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Subscribers</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Subscriber will be the one to use the service
                        </p>
                    </div>

                    <form onSubmit={submitForm} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Subscribers Form</CardTitle>
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
                </div>
            </div>


            {!subscriber && <div className="space-y-10 divide-y divide-gray-900/10 mt-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Method</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            User payment card
                        </p>
                    </div>

                    <form onSubmit={submitPaymentMethod} className="shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Subscribers Form</CardTitle>
                                <CardDescription>User personal information.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <PaymentCards formHandler={cardForm} 
                                    cardNumberValue={cardNumberValue} 
                                    setCardNumberValue={setCardNumberValue} 
                                    setCardTypeValue={setCardTypeValue}
                                />
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Button type="submit" disabled={cardForm.processing}>
                                    {cardForm.processing && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                                    Save
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </div>}
        </AdminLayout>
    )
}
