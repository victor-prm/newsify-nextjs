import Link from "next/link";
import { footerList } from "../_lib/categories";
import { TiGlobeOutline } from "react-icons/ti";




export default function Footer() {
    return (
        <footer className="flex justify-center p-2 border-gray-200/50 border-t">
            <nav className="flex w-full max-w-160 justify-around">
                {footerList.map(link => {
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex flex-col items-center text-xs"
                        >
                            <Icon className="size-5 mb-1" />
                            {link.title}
                        </Link>
                    );
                })}
            </nav>
        </footer>
    )
}