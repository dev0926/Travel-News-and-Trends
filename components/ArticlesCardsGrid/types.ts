export interface Article {
  web_url: string;

  snippet: string;

  print_page: number;

  print_section: string;

  source: string;

  multimedia: Array<Multimedia>;

  headline: Headline;

  keywords: Array<Keyword>;

  pub_date: string;

  document_type: string;

  news_desk: string;

  section_name: string;

  byline: Byline;

  type_of_material: string;

  _id: string;

  word_count: number;

  uri: string;
}

interface Multimedia {
  rank: number;

  subtype: string;

  caption: string;

  credit: string;

  type: string;

  url: string;

  height: number;

  width: number;

  legacy: {
    xlarge: string;

    xlargewidth: number;

    xlargeheight: number;
  };

  crop_name: string;
}

interface Headline {
  main: string;

  kicker: string;

  content_kicker: string;

  print_headline: string;

  name: string;

  seo: string;

  sub: string;
}

interface Keyword {
  name: string;

  value: string;

  rank: number;

  major: string;
}

interface Byline {
  original: string;

  person: Array<Person>;

  organization: string;
}

interface Person {
  firstname: string;

  middlename: string;

  lastname: string;

  qualifier: string;

  title: string;

  role: string;

  organization: string;

  rank: number;
}
