// @flow
import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Paper } from "@material-ui/core";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import anime from "animejs/lib/anime.es";

import Navbar from "#components/Navbar";
import theme, { titleFont } from "#styles/theme";

const BASELINE = 40;
const logoSize = BASELINE * 1.5; // get this better responsive

const headerRootStyle = css`
  background: white;
  color: ${theme.palette.primary.main};
  border-top: 24px ${theme.palette.primary.main} solid;
  padding: 10px;
`;

const logoStyle = css`
  height: ${logoSize}px;
  width: auto;
  display: inline-block;
  vertical-align: bottom;
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
  align-self: center;
`;

const titleStyle = css`
  font-size: ${BASELINE}px;
  line-height: normal;
  font-family: ${titleFont};
`;

const subtitleStyle = css`
  text-indent: 1em;
  margin-top: -1.2em;
  font-size: ${BASELINE * 0.25}px;
`;

const clickable = css`
  cursor: pointer;
  height: 100%;
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

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, max-content));
  align-items: end;
  grid-auto-flow: row dense;
  grid-gap: 12px;
`;

function Header(): React.Node {
  const [tl, setTl] = React.useState(null);

  const logo = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    const timeline = anime.timeline({
      autoplay: false,
      direction: "alternate",
      easing: "linear",
    });
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
    setTl(timeline);
  }, []);

  return (
    <Paper>
      <header css={headerRootStyle}>
        <div css={gridStyle}>
          <div css={titleWrapper}>
            <div css={clickable} onClick={tl?.restart}>
              <Img
                alt="Satire V logo"
                fixed={logo.file.childImageSharp.fixed}
                css={logoStyle}
              />
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
              <Img
                alt="Satire V logo"
                fixed={logo.file.childImageSharp.fixed}
                css={logoStyle}
              />
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
    </Paper>
  );
}

export default Header;
