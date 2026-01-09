import ArticleItem from "./_components/ArticleItem";
import { fetchArticlesByCategory } from "./_lib/actions";

export default async function Home() {
  const articles = await fetchArticlesByCategory("europe");
  console.log(articles);

  return (
    <>
      <main className="bg-white overflow-scroll">
        {articles.map(article => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </main>
    </>
  );
}
