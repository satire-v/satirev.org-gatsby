import React from "react";
import { css } from "@emotion/core";
import SvgIcon from "#assets/SvgIcon.react";
import SearchBar from "#components/search/SearchBar.react";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: row;
  text-decoration: none;
  &{

  }
`;

class SearchSection extends React.Component {
  render() {
    return (
      <div
        css={root}
      >
        <SearchBar />
      </div>
    );
  }
}

export default SearchSection;
