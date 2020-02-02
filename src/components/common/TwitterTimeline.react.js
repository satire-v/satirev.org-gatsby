// @flow
import * as React from "react";
import { css } from "@emotion/core";
import theme from "#styles/theme";
import { Card, CardContent } from "@material-ui/core";

function TwitterTimeline(): React.Node {
  return (
    <a
      style={{
        height: 600,
        background: theme.palette.grey["300"],
        padding: theme.spacing(2),
      }}
      className="twitter-timeline"
      data-height="600"
      href="https://twitter.com/therealsatirev"
    >
      Tweets by Satire V
    </a>
  );
}

export default TwitterTimeline;
