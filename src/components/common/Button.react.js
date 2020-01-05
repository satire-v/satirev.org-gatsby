// @flow
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Button as MuiButton } from "@material-ui/core";

type Props = {
  children: ?React.Node,
};

const LinkBehavior = React.forwardRef((props, ref) => (
  <GatsbyLink
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

function Button(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <MuiButton
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      component={LinkBehavior}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
