import { NYTApiResponse, Article} from "./types";
import { getShortestText, dateStartLimit } from "./utils";

const k = "ZIlfSqviIIl000Si2V335gWv3C2zzGyL";

export async function fetchArticlesByCategory(category: string): Promise<Article[]> {
  "use server";
  console.log("Fetching fresh articles from API...");

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&begin_date=${dateStartLimit()}&api-key=${k}&sort=newest`;
  const response = await fetch(url);
  const data: NYTApiResponse = await response.json();

  const articles: Article[] = data.response.docs
    .filter(article => article.multimedia.default?.url) // only keep articles with a default multimedia URL
    .map(article => ({
      id: article.uri,
      title: getShortestText(article.headline.main, article.headline.print_headline),
      abstract: article.abstract,
      thumbnail: article.multimedia.default!.url, // ! is safe because of the filter above
      byline: article.byline.original,
      category,
      pub_date: article.pub_date,
      url: article.web_url,
    }));

  console.log(articles);
  return articles;
}