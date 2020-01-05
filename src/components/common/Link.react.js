// @flow
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link as MuiLink } from "@material-ui/core";
import { css } from "@emotion/core";
import theme from "@styles/theme";

type Props = {
  children: ?React.Node,
};

const LinkBehavior = React.forwardRef((props, ref) => (
  <GatsbyLink
    activeStyle={{ color: theme.palette.primary.dark }}
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

const linkRoot = css`
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

function Link(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <MuiLink
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      css={linkRoot}
      color="textPrimary"
      underline="none"
      component={LinkBehavior}
    >
      {children}
    </MuiLink>
  );
}

export default Link;
