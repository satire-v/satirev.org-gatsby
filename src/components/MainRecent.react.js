// @flow
import * as React from "react";
import ArticleVCard from "@components/ArticleVCard";
import LatestArticleCard from "@queries/LatestArticleCard";

function MainRecent(): React.Node {
  const article = LatestArticleCard();
  return <ArticleVCard article={article} isFeatured />;
}

export default MainRecent;
