// @flow
import * as React from "react";
import MostRecentArticle from "@queries/MostRecentArticle";
import PostPreview from "@components/PostPreview";

function MainRecent(): React.Node {
  const article = MostRecentArticle();
  return <PostPreview article={article} size="large" />;
}

export default MainRecent;
