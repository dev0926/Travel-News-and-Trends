export async function fetchArticleData(query: string, pageNumber: number) {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Travel")&q=${query}&page=${
      pageNumber - 1
    }&sort=newest&api-key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function fetchPaginationData(query: string, pageNumber: number) {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Travel")&q=${query}&page=${
      pageNumber - 1
    }&sort=newest&fl=docs&api-key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
