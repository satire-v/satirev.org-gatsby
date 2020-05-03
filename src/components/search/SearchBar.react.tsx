import React from "react";
import { css } from "@emotion/core";
import SvgIcon from "#assets/SvgIcon.react";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: row;
  border: 1px solid var(--grey-500);
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  &{
    .search-icon {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background: var(--grey-300);
      border-right: 1px solid var(--grey-500);
    }
    .input-bar {
      -webkit-appearance: none;
      border-style: none;
      width: 100%;
      height: 40px;
      font-size: 18pt;
      padding: 5px;
    }
    .input-bar:focus {
      outline-width: 0px;
      box-shadow: 0 0 1px 1px crimson;
    }
    .search-button {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 18pt;
      font-weight: 700;
      padding: 5px;
      cursor: pointer;
      color: white;
      background: var(--crimson-dark);
      transition: all 0.2s ease;
    }
    .search-button:hover {
      background: black;
      font-size: 19pt;
      margin-top: -1px;
    }
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  search = (e) => {
    console.log(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return (
      <div
        css={root}
      >
        <div className="search-icon">
          <SvgIcon size="large" icon="labelArrow" color="" />
        </div>
        <input
          value={this.state.text}
          onChange={event => {this.setState({text: event.target.value})}}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.search();
            }
          }}
          className="input-bar"
        />
        <div className="search-button">
          Search
        </div>
      </div>
    );
  }
}

export default SearchBar;
