

export async function saveMessage(formData: FormData) {
  "use server";
  const msg = formData.get("message");
  const values = Object.fromEntries(formData);

  console.log("Full Object:", values);
  console.log("Besked modtaget:", msg);

  //Validér med Zod

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values)
  })

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  console.log(res);
}



export function dateStartLimit(): string {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7);

  const formatDate = (date: Date): string =>
    date.toISOString().slice(0, 10).replace(/-/g, '');

  const beginDate = formatDate(aWeekAgo);

  return beginDate;
}


function getShortestText(text1: string, text2?: string): string {
  let main_text = text1;
  if (text2 && text2.length < main_text.length) {
    main_text = text2;
  }
  return main_text;
}


export type Article = {
  id: string;
  title: string;
  abstract: string;
  thumbnail: string;
  byline: string;
  category: string;
  pub_date: string;
  url: string;
};

type NYTApiResponse = {
  response: {
    docs: {
      uri: string;
      headline: {
        main: string;
        print_headline?: string;
      };
      abstract: string;
      multimedia: {
        default?: {
          url: string;
        };
      };
      byline: {
        original: string;
      };
      pub_date: string;
      web_url: string;
    }[];
  };
};

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