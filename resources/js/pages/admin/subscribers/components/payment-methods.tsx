import {
    ChevronDownIcon,
    CircleIcon,
    PlusIcon,
    StarIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

export default function PaymentMethods({ paymentMethods }: any) {

    return (
        <Card className="my-1">
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>{paymentMethods.card.brand}</CardTitle>
                    <CardDescription>
                        Card # **** **** ** {paymentMethods.card.last4}
                    </CardDescription>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                    <Button variant="secondary" className="px-3 shadow-none">
                        Action
                    </Button>
                    <Separator orientation="vertical" className="h-[20px]" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" className="px-2 shadow-none">
                                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            alignOffset={-5}
                            className="w-[200px]"
                            forceMount
                        >
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem>
                                Remove Payment Card
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div>Expiration Date {paymentMethods.card.exp_year}</div>
                </div>
            </CardContent>
        </Card>
    )
}
