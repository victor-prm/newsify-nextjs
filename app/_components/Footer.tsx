import Link from "next/link";
import { footerList } from "../_lib/categories";


export default function Footer() {
    return (
        <footer className="flex justify-center p-2 border-gray-200/50 border-t">
            <nav className="flex w-auto gap-4">
                {
                    footerList.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    )
                    )
                }
            </nav>
        </footer>
    )
}