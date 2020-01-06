// @flow
import * as React from "react";
import { type ArticleCard } from "@queries/Article";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { css } from "@emotion/core";
import CategorySection from "@components/CategorySection";
import ImageFluid from "@common/ImageFluid";
import Link from "@common/Link";
import TagSection from "@components/TagSection";
import theme from "@styles/theme";

type Props = {
  article: ArticleCard,
  hasCategory: boolean,
};

const cardMainContent = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(1)}px;
`;

const imageRoot = css`
  width: 180px;
`;

const mediaRoot = css`
  align-self: flex-end;
  padding-left: ${theme.spacing(2)}px;
`;

const cardRoot = css`
  padding-left: 0;
  padding-right: 0;
`;

function ArticleListItem(props: Props): React.Node {
  const { article } = props;
  return (
    <CardContent css={cardRoot}>
      <div css={cardMainContent}>
        <div>
          <Link to={article.slug}>
            <Typography variant="h3">{article.title}</Typography>{" "}
          </Link>
          <Typography gutterBottom color="textSecondary" variant="subtitle2">
            {article.published}
          </Typography>
          <Typography variant="body2" component="p">
            {article.fullExcerpt}
          </Typography>
        </div>
        <CardMedia css={mediaRoot}>
          <ImageFluid css={imageRoot} fluid={article.imgFluid} />
        </CardMedia>
      </div>
      {props.hasCategory ? (
        <CategorySection category={article.category} />
      ) : null}
      <TagSection tags={article.tags} />
    </CardContent>
  );
}

ArticleListItem.defaultProps = {
  hasCategory: false,
};

export default ArticleListItem;
