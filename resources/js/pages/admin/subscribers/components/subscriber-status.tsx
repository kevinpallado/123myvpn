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
import { useForm, usePage } from '@inertiajs/react'

export default function SubscriberStatus() {

    const { subscriptionStatus } = usePage<any>().props
    // form props setup
    const { data, setData, post, put, processing, errors } = useForm({
        plan_pricing_id: subscriptionStatus ? subscriptionStatus.plan_pricing_id : '',
        premium_user: subscriptionStatus ? subscriptionStatus.premium_user : false,
        date_subscribe: subscriptionStatus ? subscriptionStatus.date_subscribe : '',
        date_expired: subscriptionStatus ? subscriptionStatus.date_expired : '',
        data_subscribed: subscriptionStatus ? subscriptionStatus.data_subscribed : '',
        data_remaining: subscriptionStatus ? subscriptionStatus.data_remaining : '',
        created_at: subscriptionStatus ? subscriptionStatus.created_at : '',
    })

    if (!subscriptionStatus) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md my-4">
                User is not subscribed yet
            </div>
        );
    }

    const isPremiumUser = subscriptionStatus && subscriptionStatus.premium_user;

    return <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <Card>
            <CardHeader>
                <div className="flex items-center">
                    <CardTitle>Subscribers Form</CardTitle>
                    {isPremiumUser && (
                        <div className="ml-4 bg-yellow-600 text-white px-2 py-1 rounded-md">
                            Premium User
                        </div>
                    )}
                </div>
                <CardDescription>User personal information.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid">
                    <div className="col-span-full">
                        <Label htmlFor="plan_pricing_id">
                            Plan Pricing Name
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="plan_pricing_id"
                                id="plan_pricing_id"
                                value={data.plan_pricing_id}
                                disabled
                            />
                        </div>
                        <Label htmlFor="date_subscribe">
                            Date Subscribed
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="date_subscribe"
                                id="date_subscribe"
                                value={data.date_subscribe}
                                disabled
                            />
                        </div>
                        <Label htmlFor="date_expired">
                            Expiry Date
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="date_expired"
                                id="date_expired"
                                value={data.date_expired}
                                disabled
                            />
                        </div>
                        <Label htmlFor="data_subscribed">
                            Data Subscribed
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="data_subscribed"
                                id="data_subscribed"
                                value={`${data.data_subscribed} GB`}
                                disabled
                            />
                        </div>
                        <Label htmlFor="data_remaining">
                            Data Remaining
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="data_remaining"
                                id="data_remaining"
                                value={`${data.data_remaining} GB`}
                                disabled
                            />
                        </div>
                        <Label htmlFor="created_at">
                            Date Created this subscription
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="created_at"
                                id="created_at"
                                value={data.created_at}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </form>
}