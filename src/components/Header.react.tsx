import * as React from "react";
import Img from "gatsby-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import anime, { AnimeTimelineInstance } from "animejs";
import { css } from "@emotion/core";

import Navbar from "#components/Navbar.react";
import timelineInit from "#animations/mirrorHeader";

const BASELINE = 40;

const headerRoot = css`
  --baseline-font-size: ${BASELINE}px;
  --logo-size: calc(var(--baseline-font-size) * 1.5);
  padding: 10px;
  color: var(--crimson);
  background: white;
  border-top: 24px var(--crimson) solid;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);

  & .logo-style {
    display: inline-block;
    width: auto;
    height: var(--logo-size);
    vertical-align: bottom;
  }

  & .title-wrapper {
    display: inline-block;
    flex: 1 1 auto;
    align-self: center;
    order: 0;
    white-space: nowrap;
    text-align: start;
    & > div,
    & > a {
      display: inline-block;
    }
  }

  & .title-style {
    font-size: 40px;
    font-family: var(--title-font);
    line-height: normal;
  }

  & .subtitle-style {
    margin-top: -1.2em;
    font-size: calc(var(--baseline-font-size) * 0.25);
    text-indent: 1em;
  }

  & .clickable {
    height: 100%;
    cursor: pointer;
  }

  & .mirrored-container {
    grid-column-end: -1;
    transform: scaleX(-1);
    opacity: 0;
    mask-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4) 30%,
      rgba(255, 255, 255, 0.05)
    );
    span {
      display: inline-block;
      transform-style: preserve-3d;
      &.space {
        white-space: pre-wrap;
      }
      &.scale {
        max-height: var(--baselint-font-size);
        transform-origin: bottom right;
        &.uppercase {
          margin-right: -0.4em;
          opacity: 1;
        }
        &.lowercase {
          opacity: 1;
        }
      }
    }
  }
  & .grid-root {
    display: grid;
    grid-auto-flow: row dense;
    grid-gap: 12px;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
    align-items: end;
  }
`;

function Header(): JSX.Element {
  const [tl, setTl] = React.useState<AnimeTimelineInstance | null>(null);

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
    timelineInit(timeline);
    setTl(timeline);
  }, []);

  return (
    <header css={headerRoot}>
      <div className="grid-root">
        <div className="title-wrapper">
          <div className="clickable" onClick={tl?.restart}>
            <Img
              alt="Satire V logo"
              fixed={logo.file.childImageSharp.fixed}
              className="logo-style"
            />
          </div>
          <Link className="clickable" to="/">
            <div className="title-style">Satire V</div>
            <div className="subtitle-style">Holding a Mirror Up to Truth</div>
          </Link>
        </div>

        <div className="mirrored-container title-wrapper">
          <div>
            <Img
              alt="Satire V logo"
              fixed={logo.file.childImageSharp.fixed}
              className="logo-style"
            />
          </div>

          <div>
            <div className="title-style">
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
            <div className="subtitle-style">Holding a Mirror Up to Truth</div>
          </div>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
