import { connectHits } from "react-instantsearch-dom";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { ArticleCard, processArticleCardQuery } from "#queries/Article";
import ArticleListItem from "#components/article/ArticleListItem.react";

// hide hits until there is some text in the searchbox
const Hits = ({ hits }) => (
  <ul>
    {hits.map(hit => (
      <ArticleListItem
        style={{ height: 100 }}
        article={{ ...hit, fullExcerpt: hit._snippetResult.content.value }}
        hasImage={false}
      />
    ))}
  </ul>
);

export const CustomHits = connectHits(Hits);
