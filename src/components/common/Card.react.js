// @flow
import * as React from "react";
import { css } from "@emotion/core";

import buttonBase from "#styles/buttonBase.css";

type Props = {
  children: ?React.Node,
};

type ComponentProps = {
  component: React.ElementType,
};

type CardProps = Props & ComponentProps;

const card = css`
  overflow: hidden;
  color: var(--font-color-primary);
  background-color: #fff;
  border-radius: var(--border-radius);
  &.outlined {
    border: 1px solid var(--disabled-background);
  }
`;

function Card(props: CardProps): React.Node {
  const { children, component, ...rest } = props;
  return (
    <component {...rest} css={card}>
      {props.children}
    </component>
  );
}

Card.defaultProps = {
  component: "div",
};

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
  & .title {
    flex: 1 1 auto;
  }
`;

type HeaderProps = {
  title: string,
} & ComponentProps;

function CardHeader(props: HeaderProps): React.Node {
  const { title, component, ...rest } = props;
  return (
    <div {...rest} css={cardHeader}>
      <component className="title">{title}</component>
    </div>
  );
}

CardHeader.defaultProps = {
  component: "h6",
};

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
  & media {
    width: 100%;
  }
  & img {
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
