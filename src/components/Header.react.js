// @flow
import * as React from "react";
import { Link } from "gatsby";
import { colors, fonts } from "@styles/global";
import { css } from "@emotion/core";
import Navbar from "@components/Navbar";
import anime from "animejs/lib/anime.es";
import logo from "@img/logo.png";

const BASELINE = 56;

const logoSize = BASELINE * 1.5; // get this better responsive

const headerRootStyle = css`
  background: white;
  width: 100%;
  color: ${colors.crimson};
  border-bottom: 12px ${colors.crimson} solid;
  padding: 10px;
`;

const logoStyle = css`
  height: ${logoSize}px;
  width: auto;
`;

const titleWrapper = css`
  text-align: start;
  display: inline-block;
  white-space: nowrap;
  & > div,
  & > a {
    display: inline-block;
  }
  flex: 1 1 auto;
  order: 0;
`;

const titleStyle = css`
  font-family: ${fonts.siteTitle};
  font-size: ${BASELINE}px;
  line-height: normal;
`;

const subtitleStyle = css`
  text-indent: 1em;
  margin-top: -0.8em;
  font-size: ${BASELINE * 0.25}px;
`;

const clickable = css`
  cursor: pointer;
  height: ${logoSize}px;
`;

const FADE_IN_DUR = 2000;
const VERITAS_START_DELAY = 4000;
const VERITAS_START_TS = FADE_IN_DUR + VERITAS_START_DELAY;
const FLIP_DUR = 2500;
const FLIP_DELAY = 200;
const VERITAS_START_TO_FLIP_S_START_DUR = 6 * FLIP_DELAY;
const FLIP_S_START_TS = VERITAS_START_TS + VERITAS_START_TO_FLIP_S_START_DUR;
const END_DELAY = 1250;
const FADE_S_DUR = 10;
const FLIP_EASING = "cubicBezier(.75,.25,.25,.75)";

const mirroredContainer = css`
  &.mirroredContainer {
    grid-column-end: -1;
    transform: scaleX(-1);
    opacity: 0;
    ${titleWrapper}
    mask-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4) 30%,
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
        max-height: ${BASELINE}px;
        &.uppercase {
          opacity: 1;
          margin-right: -0.4em;
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
  translateX: [0, "-.4em"],
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

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, auto));
  align-items: end;
  grid-auto-flow: row dense;
  grid-gap: 2px;
`;

function Header(): React.Node {
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
    <header css={headerRootStyle}>
      <div css={gridStyle}>
        <div css={titleWrapper}>
          <div css={clickable} onClick={timeline.restart}>
            <img alt="Satire V logo" src={logo} css={logoStyle} />
          </div>
          <Link css={clickable} to="/">
            <div css={titleStyle}>Satire V</div>
            <div css={subtitleStyle}>Holding a Mirror Up to Truth</div>
          </Link>
        </div>

        <div
          align="center"
          justify="center"
          css={mirroredContainer}
          className="mirroredContainer"
        >
          <div>
            <img alt="Satire V logo" src={logo} css={logoStyle} />
          </div>

          <div>
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
          </div>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
