// @flow

import * as React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { css } from "@emotion/core";
import { margins } from "@styles/global";
import BreakingNewsBar from "@components/BreakingNewsBar";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import MainRecent from "@components/MainRecent";
import Page from "@layouts/Page";
import PostCardGrid from "@components/PostCardGrid";
import image from "@utils/image";
import mostRecentInEachCategory from "@queries/MostRecentInEachCategory";

// TODO: make a generic column number layout

export default (): React.Node => (
  <Page>
    <BreakingNewsBar />
    <FlexLayout direction="horizontal" align="start" justify="center">
      <FlexLayoutItem
        grow={1}
        css={css`
          padding: 0 ${margins.layoutColumns};
          max-width: ${image.sizes.large.width}px;
        `}
      >
        {/*  TODO: picture max width */}
        <FlexLayout direction="vertical" align="center">
          <FlexLayoutItem>
            <MainRecent />
          </FlexLayoutItem>
          <FlexLayoutItem
            css={css`
              width: 100%;
            `}
          >
            <PostCardGrid
              articles={mostRecentInEachCategory()}
              cardSize="medium"
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem
        basis={0}
        css={css`
          padding: 0 ${margins.layoutColumns};
          border-right: 1px solid lightgray;
          border-left: 1px solid lightgray;
        `}
      >
        <FlexLayout direction="vertical" style={{ alignItems: "stretch" }}>
          <FlexLayoutItem>
            <PostCardGrid
              articles={mostRecentInEachCategory()}
              gridDirection="vertical"
              cardSize="medium"
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem
        grow={1}
        basis={0}
        css={css`
          padding: 0 ${margins.layoutColumns};
        `}
      >
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
