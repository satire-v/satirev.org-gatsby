// @flow
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link as MuiLink } from "@material-ui/core";
import { css } from "@emotion/core";
import theme from "@styles/theme";

type Props = {
  children: ?React.Node,
  colorChange: boolean,
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
  const { children, colorChange, ...rest } = props;
  return (
    <MuiLink
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      css={props.colorChange ? linkRoot : null}
      color="textPrimary"
      underline="none"
      component={LinkBehavior}
    >
      {children}
    </MuiLink>
  );
}

Link.defaultProps = {
  colorChange: true,
};

export default Link;
