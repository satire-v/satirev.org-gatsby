import React from "react";
import { navigate } from "@reach/router";
import { css } from "@emotion/core";

import SvgIcon from "#assets/SvgIcon.react";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: row;
  text-decoration: none;
  & {
    .input-bar {
      width: 250px;
      height: 30px;
    }
    .searchButton {
      position: relative;
      width: 29px;
      right: 29.5px;
      top: 6px;
      height: 28.5px;
      cursor: pointer;
    }
  }
`;

class NavSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  search = e => {
    navigate("/search/", { state: { text: this.state.text } }).then(() => {
      this.setState({ text: "" });
    });
  };

  render() {
    return (
      <div css={root}>
        <input
          value={this.state.text}
          onChange={event => {
            this.setState({ text: event.target.value });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.search();
            }
          }}
          className="input-bar"
        />
        <div className="searchButton" onClick={this.search}>
          <SvgIcon size="small" icon="search" color="" />
        </div>
      </div>
    );
  }
}

export default NavSearchbar;
