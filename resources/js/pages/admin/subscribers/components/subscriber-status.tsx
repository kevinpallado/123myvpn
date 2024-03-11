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

export default function SubscriberStatus() {

    return <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <Card>
            <CardHeader>
                <CardTitle>Subscribers Form</CardTitle>
                <CardDescription>User personal information.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid">
                    <div className="col-span-full">
                        <Label htmlFor="name">
                            Data Remaining
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="data_remaining"
                                id="data_remaining"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </form>
}