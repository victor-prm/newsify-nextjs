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

export type NYTApiResponse = {
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