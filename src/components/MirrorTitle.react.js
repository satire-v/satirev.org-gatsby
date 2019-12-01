// @flow
import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { fonts } from "@styles/global";
import FlexLayout from "@common/FlexLayout";
import FlexLayoutItem from "@common/FlexLayoutItem";
import anime from "animejs/lib/anime.es";
import logo from "@img/logo.png";

const BASELINE = 56;

const rootStyle = css``;

const logoStyle = css`
  height: 96px;
  width: auto;
  padding: 8px 8px 0px;
`;

const titleWrapper = css`
  padding: 8px;
`;

const titleStyle = css`
  font-family: ${fonts.title};
  font-size: ${BASELINE}px;
`;

const subtitleStyle = css`
  text-indent: 1em;
  margin-top: -10px;
`;

const clickable = css`
  cursor: pointer;
  white-space: nowrap;
`;

const FADE_IN_DUR = 2000;
const VERITAS_START_DELAY = 4000;
const VERITAS_START_TS = FADE_IN_DUR + VERITAS_START_DELAY;
const FLIP_DUR = 2500;
const FLIP_DELAY = 60;
const VERITAS_START_TO_FLIP_S_START_DUR = 6 * FLIP_DELAY;
const FLIP_S_START_TS = VERITAS_START_TS + VERITAS_START_TO_FLIP_S_START_DUR;
const END_DELAY = 1250;
const FADE_S_DUR = 10;
const FLIP_EASING = "cubicBezier(.75,.25,.25,.75)";

const mirroredContainer = css`
  &.mirroredContainer {
    transform: scaleX(-1);
    opacity: 1;
    ${titleWrapper}
    mask-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.05)
    );
    span {
      transform-style: preserve-3d;
      display: inline-block;
      &.space {
        white-space: pre-wrap;
      }
      &.scale {
        transform-origin: bottom right;
        max-height: 56px;
        &.uppercase {
          opacity: 1;
          margin-right: -23px;
        }
        &.lowercase {
          opacity: 1;
        }
      }
    }
  }
`;

const fadeIn = {
  targets: `.mirroredContainer`,
  opacity: [0, 1],
  duration: FADE_IN_DUR,
};

const moveV = {
  targets: `.mirroredContainer span.vMover`,
  translateX: [0, -22],
  duration: FLIP_DUR, // so will finish as V finished flipping
  easing: FLIP_EASING,
};

const flipLetters = {
  targets: `.mirroredContainer span:not(.space):not(.scale):not(.vMover)`,
  scaleX: -1,
  delay(el, i, l) {
    let fIndex = l - 1 - i;
    if (fIndex === l - 1) {
      fIndex -= 1;
    }
    return fIndex * FLIP_DELAY;
  },
  duration: FLIP_DUR,
  direction: "reverse",
  easing: FLIP_EASING,
};

const fadeOutUppercaseS = {
  targets: `.mirroredContainer span.uppercase.scale`,
  opacity: [1, 0],
  duration: FADE_S_DUR,
};

const fadeInLowercaseS = {
  targets: `.mirroredContainer span.lowercase.scale`,
  opacity: [0, 1],
  duration: FADE_S_DUR,
};

const timeline = anime.timeline({
  autoplay: false,
  direction: "alternate",
  easing: "linear",
});

function MirrorTitle(): React.Node {
  React.useEffect(() => {
    timeline
      .add(fadeIn)
      .add(moveV, VERITAS_START_TS)
      .add(flipLetters, VERITAS_START_TS)
      .add(fadeOutUppercaseS, FLIP_S_START_TS + FLIP_DUR / 2 - FADE_S_DUR)
      .add(fadeInLowercaseS, FLIP_S_START_TS + FLIP_DUR / 2)
      .add({
        targets: `.mirroredContainer`,
        opacity: [1, 1],
        endDelay: END_DELAY,
      });
  }, []);
  return (
    <FlexLayout css={rootStyle}>
      <FlexLayoutItem style={{ height: "100%" }}>
        <span css={clickable} onClick={timeline.restart}>
          <img alt="Satire V logo" src={logo} css={logoStyle} />
        </span>
      </FlexLayoutItem>
      <FlexLayoutItem css={titleWrapper}>
        <Link css={clickable} to="/">
          <div css={titleStyle}>Satire V</div>
          <div css={subtitleStyle}>Holding a Mirror Up to Truth</div>
        </Link>
      </FlexLayoutItem>
      <FlexLayoutItem
        css={mirroredContainer}
        className="mirroredContainer"
        style={{ flex: "0 1 auto" }}
      >
        <div css={titleStyle}>
          <span className="uppercase s scale">
            <span className="uppercase s flip">S</span>
          </span>
          <span className="lowercase s scale">
            <span className="lowercase s flip">s</span>
          </span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>r</span>
          <span>e</span>
          <span className="space"> </span>
          <span className="vMover">
            <span>V</span>
          </span>
        </div>
        <div css={subtitleStyle}>Holding a Mirror Up to Truth</div>
      </FlexLayoutItem>
    </FlexLayout>
  );
}

export default MirrorTitle;
