// @flow
import * as React from "react";
import Img from "gatsby-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

import Navbar from "#components/Navbar";
import timelineFn from "#animations/mirrorHeader";

const BASELINE = 40;

const headerRoot = css`
  --baseline-font-size: ${BASELINE};
  --logo-size: calc(var(--baseline-font-size) * 1.5);
  padding: 10px;
  color: var(--crimson);
  background: white;
  border-top: 24px var(--crimson) solid;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

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
    const timeline = timelineFn();
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

        <div
          align="center"
          justify="center"
          className="mirrored-container title-wrapper"
        >
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
