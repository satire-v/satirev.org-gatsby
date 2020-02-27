import * as React from "react";
import { cx } from "emotion";
import { css } from "@emotion/core";

type Props = {
  className?: string,
};

type ChildrenProps = {
  children: ?React.Node,
};

type ComponentProps = {
  component: string | React.ComponentType<any>,
};

type CardProps = { outlined: boolean } & Props & ChildrenProps & ComponentProps;

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
  const { children, component, outlined, className, ...rest } = props;
  const Component = component;
  return (
    <Component {...rest} css={card} className={cx({ outlined }, className)}>
      {props.children}
    </Component>
  );
}

Card.defaultProps = {
  component: "div",
  outlined: true,
};

const cardActionArea = css`
  display: block;
  text-align: inherit;
  width: 100%;
  &:hover {
    filter: brightness(80%);
  }
`;

type ActionAreaProps = Props & ChildrenProps;

function CardActionArea(props: ActionAreaProps): React.Node {
  const { children, className, ...rest } = props;
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

type HeaderProps = {
  title: string,
} & Props &
  ComponentProps;

function CardHeader(props: HeaderProps): React.Node {
  const { title, component, className, ...rest } = props;
  const Component = component;
  return (
    <div {...rest} css={cardHeader} className={`${className ?? ""}`}>
      <Component className="card-title">{title}</Component>
    </div>
  );
}

CardHeader.defaultProps = {
  component: "h6",
};

const cardContent = css`
  padding: 16px;
  &:last-child {
    padding-bottom: 24px;
  }
`;

type ContentProps = Props & ChildrenProps;

function CardContent(props: ContentProps): React.Node {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} css={cardContent} className={className}>
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

type MediaProps = Props & ChildrenProps;

function CardMedia(props: MediaProps): React.Node {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} css={cardMedia} className={className}>
      {children}
    </div>
  );
}

export { CardActionArea, CardHeader, CardContent, CardMedia, Card };
export default Card;
