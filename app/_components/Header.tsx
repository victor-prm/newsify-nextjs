import Image from "next/image"

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2">
            <div className="flex gap-2 items-center">
                <Image
                    src="/newsify_logo.svg"
                    alt="newsify_logo"
                    width={24}
                    height={24}
                    priority
                />
                <h1 className="font-bold text-xl font-playfair-display">
                    Newsify
                </h1>
            </div>

            <button className="font-open-sans">
                Settings
            </button>
        </header>
    )
}