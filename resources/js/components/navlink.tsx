// inertia
import { Link } from "@inertiajs/react";

export function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="inline-block rounded-lg px-2 py-1 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
            {children}
        </Link>
    );
}
