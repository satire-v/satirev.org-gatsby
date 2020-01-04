// @flow
import * as React from "react";
import ArticleVCard from "@components/ArticleVCard";
import MostRecentArticle from "@queries/MostRecentArticle";

function MainRecent(): React.Node {
  const article = MostRecentArticle();
  return <ArticleVCard article={article} maxSize="large" hasHeader={false} />;
}

export default MainRecent;
