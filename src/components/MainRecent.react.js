// @flow
import * as React from "react";
import MostRecentArticle from "@queries/MostRecentArticle";
import PostCard from "@components/PostCard";

function MainRecent(): React.Node {
  const article = MostRecentArticle();
  return <PostCard article={article} size="large" />;
}

export default MainRecent;
