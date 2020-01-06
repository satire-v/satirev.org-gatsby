// @flow
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Fab as MuiFab } from "@material-ui/core";

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

function Fab(props: Props): React.Node {
  const { children, ...rest } = props;
  return (
    <MuiFab
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      component={LinkBehavior}
    >
      {children}
    </MuiFab>
  );
}

export default Fab;
