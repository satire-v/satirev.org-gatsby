import {
  InstantSearch,
  Pagination,
  Hits,
  Configure,
} from "react-instantsearch-dom";
import React, { useState, useEffect, useRef, createRef } from "react";
import algoliasearch from "algoliasearch/lite";
import { css } from "@emotion/core";

import { CustomHits } from "./SearchPreview";
import { CustomSearchBox } from "./SearchBar.react";
import { CustomPagination } from "./Pagination.react";

import SvgIcon from "#assets/SvgIcon.react";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: calc(6 * var(--spacing));
  & {
    .meta-results {
      display: flex;
      flex-direction: row;
      font-size: 14pt;
      & {
        .results-text {
          flex: 1;
        }
        .options {
          width: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .options:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .grey-line {
      width: 100%;
      height: 1px;
      background-color: var(--grey-300);
    }
    .input-empty {
      display: none;
    }
  }
`;

interface Props {
  initialSearch: string;
}

interface State {
  advanced: boolean;
  isToggledOn: boolean;
  hasInput: boolean;
  refresh: boolean;
}

class SearchSection extends React.Component<Props, State> {
  private searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID || "",
    process.env.GATSBY_ALGOLIA_SEARCH_KEY || ""
  );

  constructor(props: Props) {
    super(props);
    this.state = {
      advanced: false,
      isToggledOn: false,
      hasInput: false,
      refresh: false,
    };
  }

  componentDidMount(): void {
    if (this.props.initialSearch) {
      this.setState({ hasInput: true });
    }
  }

  renderMeta = (): JSX.Element => {
    let advancedIcon = <SvgIcon size="large" icon="dropup" />;
    let advancedOptions = <div> OPTIONS </div>;
    if (!this.state.advanced) {
      advancedIcon = <SvgIcon size="large" icon="dropdown" />;
      advancedOptions = <></>;
    }

    return (
      <div>
        <div className="meta-results">
          <p className="results-text">
            <strong>6</strong> results found
          </p>
          <div
            className="options"
            onClick={(): void => {
              this.setState({ advanced: !this.state.advanced });
            }}
          >
            <p>
              <strong>Advanced</strong>
            </p>
            {advancedIcon}
          </div>
        </div>
        {advancedOptions}
      </div>
    );
  };

  render(): JSX.Element {
    return (
      <div css={root}>
        <InstantSearch
          searchClient={this.searchClient}
          indexName="TestArticles"
        >
          <Configure hitsPerPage={5} />
          <CustomSearchBox
            onKeyUp={event => {
              this.setState({
                hasInput: event.currentTarget.value !== "",
              });
            }}
            defaultRefinement={this.props.initialSearch}
          />
          {this.renderMeta()}
          <div className="grey-line" />
          <div className={this.state.hasInput ? "input-value" : "input-value"}>
            <CustomHits hitComponent={Hits} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CustomPagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default SearchSection;
