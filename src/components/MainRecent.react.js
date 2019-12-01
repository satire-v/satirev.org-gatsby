// @flow
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PostPreview from "@components/PostPreview";

function MainRecent(): React.Node {
  const mainArticle = useStaticQuery(graphql`
    query MostRecentArticle {
      allDataArticle(limit: 1, sort: { fields: modified_on, order: DESC }) {
        nodes {
          excerpt
          featured_image {
            data {
              full_url
            }
          }
          title
          slug
        }
      }
    }
  `);
  const article = mainArticle.allDataArticle.nodes[0];
  return (
    <div>
      <PostPreview
        size="large"
        title={article.title}
        imgUrl={article.featured_image.data.full_url}
        slug={article.slug}
        excerpt={article.excerpt}
      />
    </div>
  );
}

export default MainRecent;
