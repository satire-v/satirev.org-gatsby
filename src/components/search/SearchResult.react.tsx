import React from "react";
import { css } from "@emotion/core";

import Link from "#common/Link.react";
import ImageFluid from "#common/ImageFluid.react";
import Chip from "#common/Chip.react";
import SvgIcon from "#assets/SvgIcon.react";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  & {
    .link {
      flex: 1;
      display: flex;
      flex-direction: row;
      transition: all 0.3s ease;
      padding-top: 20px;
      margin-left: 0px;
      margin-right: 3px;
      box-shadow: 0 2px 2px -2px #888888;
    }
    .link:hover {
      box-shadow: 0 0 2px #888888;
      background: rgba(251, 255, 191, 0.1);
      margin-left: 3px;
      margin-right: 0px;
    }
    .teaser-image {
      flex: 1;
      height: 75%;
      top: calc(50% - 10px);
      transform: translateY(-50%);
    }
    .text-info {
      flex: 3;
      padding-left: 10px;
      padding-bottom: 5px;
      & {
        h1 {
          font-size: 20pt;
        }
        h3 {
          font-size: 18pt;
        }
        p {
          font-size: 14pt;
          margin: 10px 2px;
        }
        .tags {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }
`;

function SearchResult({ article }): JSX.Element {
  return (
    <div css={root}>
      <Link to={article.slug} className="link">
        <ImageFluid className="teaser-image" fluid={article.imgFluid} />
        <div className="text-info">
          <h1>
            <strong>{article.title}</strong>
          </h1>
          <h3>
            <SvgIcon size="small" icon="labelArrow" color="primary" />
            {article.category} - <i>{article.published}</i>
          </h3>
          <p>{article.shortExcerpt}</p>
          <div className="tags">
            <SvgIcon size="small" icon="tag" color="primary" />
            {article.tags.map((tag, i) => (
              <Chip key={i.toString()} label={tag} />
            ))}
          </div>
        </div>
        <div className="bottom-line" />
      </Link>
    </div>
  );
}

export default SearchResult;
