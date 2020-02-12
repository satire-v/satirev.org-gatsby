// @flow
import * as React from "react";

import theme from "#styles/theme";

function TwitterTimeline(): React.Node {
  return (
    <a
      style={{
        height: 600,
        background: theme.palette.grey["300"],
        padding: theme.spacing(2),
      }}
      data-dnt="true"
      className="twitter-timeline"
      data-height="600"
      href="https://twitter.com/therealsatirev"
    >
      Tweets by Satire V
    </a>
  );
}

export default TwitterTimeline;
