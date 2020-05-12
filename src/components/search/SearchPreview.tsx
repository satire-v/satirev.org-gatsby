import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import ArticleListItem from "#components/article/ArticleListItem.react";
import { graphql, useStaticQuery } from "gatsby";
import { ArticleCard, processArticleCardQuery } from "#queries/Article";

// hide hits until there is some text in the searchbox
const Hits = ({ hits }) => {
  return (
  <ul>
    {hits.map((hit) => (
      <ArticleListItem article={{...hit, fullExcerpt: hit._snippetResult.content.value}} hasImage={false} />
    ))}
  </ul>
  );
}

export const CustomHits = connectHits(Hits);