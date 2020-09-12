import { connectHits } from "react-instantsearch-dom";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { ArticleCard, processArticleCardQuery } from "#queries/Article";
import ArticleListItem from "#components/article/ArticleListItem.react";

// hide hits until there is some text in the searchbox
const Hits = ({ hits }) => {
  console.log(hits);
  return (
    <ul>
      {hits.map(hit => (
        <ArticleListItem
          key={hit._highlightResult.body.value}
          containerStyle={{}}
          article={{
            id: hit.id,
            fullExcerpt: hit._snippetResult.body.value,
            shortExcerpt: hit._snippetResult.body.value,
            imgUrl: hit.featured_image.data.full_url,
            imgExt: hit.featured_image.localFile.extension,
            imgFluid: hit.featured_image.localFile.childImageSharp.fluid,
            imgTitle: "none",
            published: hit.modified_on,
            tags: hit.tags,
            category: hit.category.name,
            slug: hit.slug,
            title: hit.title,
          }}
        />
      ))}
    </ul>
  );
};

export const CustomHits = connectHits(Hits);
