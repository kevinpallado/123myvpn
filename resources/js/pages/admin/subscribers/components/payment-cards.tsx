// global components
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// icons
import { ReloadIcon } from "@radix-ui/react-icons"
// react
import { useState } from "react";
import { router } from '@inertiajs/react';
// stripe
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js"

export default function PaymentCards({ clientId, offerPlan }: any) {
    const stripe = useStripe();
    const elements = useElements();

    const paymentElementOptions: any = {
        layout: "tabs"
    }

    const [message, setMessage] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedPlan, setSelectedPlan] = useState<string>(offerPlan[0].pricing_id);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true)

        const result: any = await stripe?.confirmSetup({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:3000",
            },
            redirect: "if_required"
        });


        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (result.error) {
            if (result.error.type === "card_error" || result.error.type === "validation_error") {
                setMessage(result.error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
            setIsLoading(false);
        } else {
            router.put(route('admin.subscribers.update', clientId), {
                ...result,
                planSelected: selectedPlan,
                action: 'card-info'
            }, {
                onSuccess: page => {
                    setIsLoading(false);
                }
            })
        }
    };

    return <div>

        <form id="payment-form" onSubmit={handleSubmit}>
            <div className="col-span-full mb-5">
                <Label htmlFor="currency">
                    Pricing Plan
                </Label>
                <div className="mt-2">
                    <Select name="currency" value={selectedPlan} onValueChange={setSelectedPlan}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                        <SelectContent>
                            {offerPlan.map((plan: any) => <SelectItem value={plan.pricing_id}>{plan.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <Button type="submit" className="mt-3" disabled={isLoading}>
                {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                Pay Now
            </Button>
        </form>

    </div>
}