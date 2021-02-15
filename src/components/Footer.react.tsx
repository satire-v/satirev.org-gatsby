import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const root = css`
  display: flex;
  align-items: center;
  height: calc(20 * var(--spacing));
  padding: calc(10 * var(--spacing));
  background: var(--crimson);
  & .row {
    display: flex;
    flex-direction: row;
  }
  & .button {
    font-family: var(--sans-serif);
    font-size: 18pt;
    margin: var(--spacing);
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;
    font-weight: 600;
  }
  & .button:hover {
    color: var(--gold-leaf-light);
    transform: scale(1.1);
  }
  & .info {
    color: white;
    margin: var(--spacing);
    cursor: default;
    & p {
      font-family: var(--sans-serif);
      color: var(--grey-300);
      margin: 0;
    }
  }
`;

function Footer(): JSX.Element {
  return (
    <footer css={root}>
      <div>
        <div className="row">
          <Link className="button" to="/about/">
            About
          </Link>
          <Link className="button" to="/comp/">
            Comp
          </Link>
          <Link className="button" to="/contact/">
            Contact
          </Link>
          {false && (
            <Link className="button" to="/submit/">
              Submit
            </Link>
          )}
          <Link className="button" to="/privacy/">
            Privacy
          </Link>
        </div>
        <div className="info">
          <p>©2020 Satire V</p>
          <p>Satire V is intended for readers of age 18 and older.</p>
          <p>
            Content on this website is satirical and should not be construed as
            fact.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
