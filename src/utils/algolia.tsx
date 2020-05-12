//import { processArticleQuery } from "queries/Article";
//import { ArticleFullFragment } from "#graphql";

const searchQuery = `
  dataArticle(limit: 100) {
    ...ArticleFull
  }
`;

const searchQueries = [
  {
    query: searchQuery,
    transformer: ({data}) => data.dataArticle.map(article => article)
  }
];

module.exports = searchQueries;