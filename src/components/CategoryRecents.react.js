// @flow
import * as React from "react";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import PostPreview from "@components/PostPreview";

const categoryTitle = css`
  padding-bottom: 6px;
  font-size: ${fonts.preview.small.titleSize}px;
  color: ${colors.crimson};
  cursor: pointer;
  ${fonts.headerStyle}
`;

const previewWrapper = css`
  padding: 8px;
`;

function CategoryRecents(): React.Node {
  const categoryRecents = useStaticQuery(graphql`
    query CategoryRecents {
      allDataArticle(sort: { fields: modified_on, order: DESC }) {
        group(field: category___name, limit: 1) {
          edges {
            node {
              title
              excerpt
              slug
              id
              featured_image {
                data {
                  full_url
                }
              }
            }
          }
          fieldValue
        }
      }
    }
  `);

  return (
    <FlexLayout
      align="start"
      justify="all"
      wrap="wrap"
      style={{ width: "100%" }}
    >
      {categoryRecents.allDataArticle.group.map(group => {
        const category = group.fieldValue;
        const article = group.edges[0].node;
        return (
          <FlexLayoutItem key={article.id} css={previewWrapper}>
            <div css={categoryTitle}>{category}</div>
            <PostPreview
              size="small"
              title={article.title}
              slug={article.slug}
              excerpt={article.slug}
              imgUrl={article.featured_image.data.full_url}
            />
          </FlexLayoutItem>
        );
      })}
    </FlexLayout>
  );
}

export default CategoryRecents;
