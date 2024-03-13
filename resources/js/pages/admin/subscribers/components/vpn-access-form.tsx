import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface VPNForm {
    accessData: any
    formStatus: boolean
    formAction: (formAction: boolean) => void
}

export default function VPNAccessForm({
    accessData,
    formStatus,
    formAction
}: VPNForm) {

    return <Dialog open={formStatus}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>VPN Access Form</DialogTitle>
                <div className="flex items-center">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <Label htmlFor="name">
                            VPN Configuration Value
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
                                name="vpn_value"
                                id="vpn_value"
                            />
                        </div>
                    </div>
                </div>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
                <Button onClick={e => formAction(!formStatus)}>Close</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

}