// @flow

import * as React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { css } from "@emotion/core";
import { getImgMaxWidth } from "@utils/image";
import BreakingNewsBar from "@components/BreakingNewsBar";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import MainRecent from "@components/MainRecent";
import Page from "@layouts/Page";
import PostCardGrid from "@components/PostCardGrid";
import mostRecentInEachCategory from "@queries/MostRecentInEachCategory";

// TODO: make a generic column number layout

export default (): React.Node => (
  <Page>
    <BreakingNewsBar />
    <FlexLayout direction="horizontal" align="start" justify="center">
      <FlexLayoutItem
        grow={0}
        css={css`
          padding-right: 2em;
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
      <FlexLayoutItem
        grow={1}
        css={css`
          padding-right: 2em;
          max-width: ${getImgMaxWidth("large")}px;
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
              padding-top: 2em;
            `}
          >
            <PostCardGrid
              articles={mostRecentInEachCategory()}
              cardSize="medium"
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
      <FlexLayoutItem grow={0}>
        <FlexLayout direction="vertical" style={{ alignItems: "stretch" }}>
          <FlexLayoutItem>
            <PostCardGrid
              articles={mostRecentInEachCategory()}
              gridDirection="vertical"
            />
          </FlexLayoutItem>
        </FlexLayout>
      </FlexLayoutItem>
    </FlexLayout>
  </Page>
);
