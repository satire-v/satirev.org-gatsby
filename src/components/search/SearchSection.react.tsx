import React, {useState, useEffect, useRef} from "react";
import { css } from "@emotion/core";
import SvgIcon from "#assets/SvgIcon.react";
import SearchBar from "#components/search/SearchBar.react";
import SearchResult from "#components/search/SearchResult.react";
import latestArticlesByCategoryCards from "#queries/LatestArticlesByCategoryCards";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &{
    .meta-results {
      display: flex;
      flex-direction: row;
      font-size: 14pt;
      &{
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
  }
`;

function SearchSection(props): JSX.Element {
  const searchRef = useRef();
  const [results, setResults] = useState(latestArticlesByCategoryCards());
  const [advanced, setAdvanced] = useState(false);
  const items = [];
  for (const [ix, val] of results.entries()) {
    items.push(<SearchResult article={val} />);
  }
  if (advanced) {
    var advancedIcon = <SvgIcon size="large" icon="dropup" />;
    var advancedOptions = (
      <div> OPTIONS </div>
    );
  } else {
    advancedIcon = <SvgIcon size="large" icon="dropdown" />;
    advancedOptions = "";
  }

  useEffect(() => {
    searchRef.current.updateSearch(props.initialSearch);
  });

  return (
    <div
      css={root}
    >
      <SearchBar ref={searchRef}/>
      <div>
        <div className="meta-results">
          <p className="results-text"><strong>{results.length}</strong> results found</p>
          <div className="options" onClick={() => {setAdvanced(!advanced)}}>
            <p><strong>Advanced</strong></p>
            {advancedIcon}
          </div>
        </div>
        {advancedOptions}
      </div>
      <div className="grey-line" />
      {items}
    </div>
  );
}

export default SearchSection;
