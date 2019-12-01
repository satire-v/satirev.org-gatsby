// @flow

import * as React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { css } from "@emotion/core";
import { imgMaxWidth } from "@utils/image";
import BreakingNewsBar from "@components/BreakingNewsBar";
import CategoryRecents from "@components/CategoryRecents";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import MainRecent from "@components/MainRecent";
import Page from "@layouts/Page";

const column = css`
  margin: 10px 10px 0;
`;

export default (): React.Node => (
  <Page>
    <FlexLayout direction="horizontal" align="start">
      <FlexLayoutItem grow={2} css={column}>
        <FlexLayout direction="vertical" align="end">
          <FlexLayoutItem>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="therealsatirev"
              options={{ height: 600 }}
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem
        grow={3}
        css={column}
        style={{ maxWidth: imgMaxWidth("large") }}
      >
        <FlexLayout
          direction="vertical"
          align="center"
          style={{ width: "100%" }}
        >
          <FlexLayoutItem style={{ width: "100%" }}>
            <BreakingNewsBar />
          </FlexLayoutItem>
          <FlexLayoutItem style={{ width: "100%" }}>
            <MainRecent />
          </FlexLayoutItem>
          <FlexLayoutItem style={{ width: "100%" }}>
            <CategoryRecents />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem grow={2} css={column}>
        <FlexLayout direction="vertical" align="start">
          <FlexLayoutItem>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="therealsatirev"
              options={{ height: 600 }}
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
    </FlexLayout>
  </Page>
);
