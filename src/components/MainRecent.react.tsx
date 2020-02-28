import * as React from "react";

import LatestArticleCard from "#queries/LatestArticleCard";
import ArticleVCard from "#components/article/ArticleVCard";

function MainRecent(): JSX.Element {
  const article = LatestArticleCard();
  return <ArticleVCard article={article} isFeatured />;
}

export default MainRecent;
