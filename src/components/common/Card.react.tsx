import React from "react";
import { cx } from "emotion";
import { css } from "@emotion/core";

const card = css`
  overflow: hidden;
  color: var(--font-color-primary);
  background-color: #fff;
  border-radius: var(--border-radius);
  &.outlined {
    border: 1px solid var(--disabled-background);
  }
`;

interface CardProps extends WithNativeComponent, StyledWrapper {
  outlined?: boolean;
}

function Card({
  children,
  component = "div",
  className,
  outlined = true,
  ...rest
}: CardProps): JSX.Element {
  const Component = component;
  return (
    <Component {...rest} css={card} className={cx({ outlined }, className)}>
      {children}
    </Component>
  );
}

const cardActionArea = css`
  display: block;
  width: 100%;
  text-align: inherit;
  &:hover {
    filter: brightness(80%);
  }
`;

function CardActionArea({
  children,
  className,
  ...rest
}: StyledWrapper): JSX.Element {
  return (
    <div
      {...rest}
      css={cardActionArea}
      className={`button-base ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

const cardHeader = css`
  display: flex;
  align-items: center;
  padding: 16px;
  & .card-title {
    flex: 1 1 auto;
  }
`;

interface HeaderProps extends WithNativeComponent, WithClassName {
  title: string;
}

function CardHeader({
  component = "h6",
  className,
  title,
  ...rest
}: HeaderProps): JSX.Element {
  const Component = component;
  return (
    <div {...rest} css={cardHeader} className={`${className ?? ""}`}>
      <Component className="card-title">{title}</Component>
    </div>
  );
}

const cardContent = css`
  padding: 16px;
  &:last-child {
    padding-bottom: 24px;
  }
`;

function CardContent({
  children,
  className,
  ...rest
}: StyledWrapper): JSX.Element {
  return (
    <div {...rest} css={cardContent} className={className}>
      {children}
    </div>
  );
}

const cardMedia = css`
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  & {
    img,
    picture,
    video {
      width: 100%;
    }
    img {
      object-fit: cover;
    }
  }
`;

function CardMedia({
  children,
  className,
  ...rest
}: StyledWrapper): JSX.Element {
  return (
    <div {...rest} css={cardMedia} className={className}>
      {children}
    </div>
  );
}

export { CardActionArea, CardHeader, CardContent, CardMedia, Card };
export default Card;
