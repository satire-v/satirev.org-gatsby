// @flow
import * as React from "react";
import { css } from "@emotion/core";
import buttonBase from "#styles/buttonBase.css";

//   CardContent,
//   CardMedia,

type Props = {
  children: ?React.Node,
};

type CardProps = {
  ...Props,
  component: React.ElementType,
};

Card.defaultProps = {
  component: "div",
};

const card = css`
  overflow: hidden;
  color: var(--font-color-primary);
  background-color: #fff;
  border-radius: var(--border-radius);
`;

function Card(props: CardProps): React.Node {
  const { children, component, ...rest } = props;
  return (
    <component {...rest} css={card}>
      {props.children}
    </component>
  );
}

const cardActionArea = css`
  ${buttonBase}
  display: block;
  text-align: inherit;
  width: 100%;
  &:hover {
    filter: brightness(80%);
  }
`;

function CardActionArea(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <div {...rest} css={cardActionArea}>
      {children}
    </div>
  );
}

const cardHeader = css`
  display: flex;
  align-items: center;
  padding: 16px;
  .title {
    flex: 1 1 auto;
  }
`;

type HeaderProps = {
  title: string,
};

function CardHeader(props: HeaderProps): React.Node {
  const { title, ...rest } = props;
  return (
    <div {...rest} css={cardHeader}>
      <h6 className="title">{title}</h6>
    </div>
  );
}

const cardContent = css`
  &:last-child {
    padding-bottom: 24;
  }
`;

function CardContent(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <div {...rest} css={cardContent}>
      {children}
    </div>
  );
}

const cardMedia = css`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  media {
    width: 100%;
  }
  img {
    object-fit: cover;
  }
`;

function CardMedia(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <div {...rest} css={cardMedia}>
      {children}
    </div>
  );
}

export { CardActionArea, CardHeader, CardContent, CardMedia, Card };
export default Card;
