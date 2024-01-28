// global components
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
// global hooks
import { formatCreditCard, getCreditCardType, formatDate, formatGeneral } from 'cleave-zen'

export default function PaymentCards({ formHandler, cardNumberValue, setCardNumberValue, setCardTypeValue }: any) {
    
    return <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <div className="col-span-full">
            <Label htmlFor="card-number">
                Card number
            </Label>
            <div className="mt-2">
                <Input
                    type="text"
                    id="card-number"
                    name="card-number"
                    value={cardNumberValue}
                    onChange={(e) => {
                        const creditCardValue = formatCreditCard(e.target.value)
                        const creditCardType = getCreditCardType(e.target.value)
                        setCardNumberValue(creditCardValue)
                        setCardTypeValue(creditCardType)
                    }}
                />
            </div>
        </div>

        <div className="col-span-8 sm:col-span-9">
            <Label htmlFor="expiration-date">
                Expiration Date (MM/YY)
            </Label>
            <div className="mt-2">
                <Input
                    type="text"
                    id="expiration-date"
                    name="expiration-date"
                    autoComplete="cc-exp"
                    value={formHandler.data.card_expiry}
                    onChange={(e) => {
                        formHandler.setData('card_expiry', formatDate(e.target.value, {
                            datePattern: ['m', 'y'],
                        }))
                    }}
                />
            </div>
        </div>

        <div className="col-span-4 sm:col-span-3">
            <Label htmlFor="cvc">
                CVC
            </Label>
            <div className="mt-2">
                <Input
                    type="text"
                    id="cvc"
                    name="cvc"
                    autoComplete="csc"
                    value={formHandler.data.card_cvc}
                    onChange={(e) => {
                        formHandler.setData('card_cvc', formatGeneral(e.target.value, {
                            blocks: [3],
                        }))
                    }}
                />
            </div>
        </div>
    </div>
}