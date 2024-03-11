import AdminLayout from '@/layouts/admin'
import SubscriberInfo from './subscriber-info'
import { usePage } from '@inertiajs/react'

export default function SubscriberForm() {
    const { subscriptionStatus } = usePage<any>().props

    return (
        <AdminLayout pageTitle='Subscribers Form'>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Subscriber will be the one to use the service
                        </p>
                    </div>

                    <SubscriberInfo />
                </div>
            </div>

            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Subscription Status</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Information for the user subscribers status
                        </p>
                    </div>

                </div>
            </div>
        </AdminLayout>
    )
}
