import Image from "next/image"

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 bg-linear-65 from-gray-100/25 to-gray-50/50 border-gray-200/50 border-b">
            <div className="flex gap-2 items-center">
                <Image
                    src="/icon.svg"
                    alt="newsify_logo"
                    width={24}
                    height={24}
                    priority
                />
                <h1 className="font-black text-xl font-playfair-display">
                    Newsify
                </h1>
            </div>

            <button className="font-open-sans">
                Settings
            </button>
        </header>
    )
}