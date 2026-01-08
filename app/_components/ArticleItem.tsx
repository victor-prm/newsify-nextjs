import Image from "next/image"

export default function ArticleItem() {
    return (
        <article className="flex gap-4 font-open-sans">
            <figure className="w-28 shrink-0 aspect-square rounded-2xl overflow-clip">
                <Image
                    className="object-cover"
                    src="https://picsum.photos/200/200"
                    alt="random image"
                    width={200}
                    height={200}
                    unoptimized
                />
            </figure>
            <div className="flex flex-col gap-2">
                <hgroup>
                    <h3 className="font-playfair-display text-lg font-semibold">Title</h3>
                    <p className="text-xs">Byline</p>
                </hgroup>
                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est itaque minima non vero quod numquam minus?</p>

            </div>
        </article>
    )
}