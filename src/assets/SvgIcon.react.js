// @flow
import * as React from "react";
import { css } from "@emotion/core";

const root = css`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  font-size: calc(24rem / 16);
  transition-property: fill;
  transition-duration: var(--transition-duration-shorter);

  &.color-primary {
    color: var(--crimson);
  }
  &.color-secondary {
    color: var(--gold-leaf);
  }
  &.color-error {
    color: var(--error);
  }
  &.color-warning {
    color: var(--warning);
  }
  &.color-disabled {
    color: var(--disabled);
  }
  &.font-size-inherit {
    fontsize: inherit;
  }
  &.font-size-small {
    fontsize: calc(20rem / 16);
  }
  &.font-size-large {
    fontsize: calc(35rem / 16);
  }
`;

const icons = {
  tag: (
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
  ),
  labelArrow: (
    <path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z" />
  ),
  navigateNext: <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />,
  navigateBefore: <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />,
};

type Props = {
  size: "small" | "large" | "inherit",
  color: "primary" | "secondary" | "disabled" | "error" | "warning",
  icon: $Keys<typeof icons>,
};

function SvgIcon(props: Props): React.Node {
  const { icon, size, color } = props;

  return (
    <svg css={root} className={(`color-${color}`, `font-size-${size}`)}>
      {icon}
    </svg>
  );
}

SvgIcon.defaultProps = {
  color: "primary",
  size: "inherit",
};

export default SvgIcon;
