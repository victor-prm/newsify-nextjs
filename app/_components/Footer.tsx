import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex justify-center p-2">
            <nav className="flex w-auto gap-4">
                <Link href="/">Home</Link>
                <Link href="/">Archive</Link>
                <Link href="/">Popular</Link>
            </nav>
        </footer>
    )
}