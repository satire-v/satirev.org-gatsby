// @flow

import * as React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { css } from "@emotion/core";
import BreakingNewsBar from "@components/BreakingNewsBar";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import MainRecent from "@components/MainRecent";
import Page from "@layouts/Page";

export default (): React.Node => (
  <Page>
    <BreakingNewsBar />
    <FlexLayout direction="horizontal" align="start">
      <FlexLayoutItem grow={1}>
        <FlexLayout direction="vertical" style={{ alignItems: "stretch" }}>
          <FlexLayoutItem>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="therealsatirev"
              options={{ height: 600 }}
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem grow={1}>
        {/*  TODO: picture max width */}
        <FlexLayout direction="vertical" align="center">
          <FlexLayoutItem>
            <MainRecent />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem grow={1}>
        <FlexLayout direction="vertical" style={{ alignItems: "stretch" }}>
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
