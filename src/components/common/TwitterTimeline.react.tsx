import * as React from "react";

function TwitterTimeline(): React.Node {
  return (
    <a
      style={{
        height: 600,
        background: "var(--grey-300)",
        padding: "calc(2 * var(--spacing))",
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
