import Image from "next/image";
import { Article } from "../_lib/actions";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";


type ArticleItemProps = {
    article: Article;
};

export default function ArticleItem({ article }: ArticleItemProps) {
    return (
        <article className="flex gap-4 p-4">
            <figure className="w-28 shrink-0 aspect-square rounded-xl overflow-clip">
                <Image
                    className="object-cover w-full h-full"
                    src={article.thumbnail || "https://picsum.photos/200/200"} // fallback
                    alt={article.title}
                    width={200}
                    height={200}
                    unoptimized
                />
            </figure>
            <div className="flex flex-col gap-2 font-open-sans">
                <hgroup>
                    <h3 className="text-lg font-bold font-playfair-display text-newsify-green-700 hover:opacity-50 duration-300">
                        <FaExternalLinkAlt className="inline h-3 w-3 my-auto mr-2" />
                        <Link href={article.url} className="underline decoration-newsify-green-700/50">
                            {article.title}
                        </Link>
                    </h3>
                    <p className="text-xs text-gray-600">{article.byline}</p>
                </hgroup>
                <p className="text-sm text-gray-700">{article.abstract}</p>
            </div>
        </article>
    );
}