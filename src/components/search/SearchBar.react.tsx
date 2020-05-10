import React from "react";
import { css } from "@emotion/core";
import SvgIcon from "#assets/SvgIcon.react";
import { connectSearchBox } from 'react-instantsearch-dom';

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
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .offset {
      align-self: center;
      transform: translateY(3px);
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
    }
  }
`;

const SearchBox = ({ currentRefinement, refine, onKeyUp }) => (
    <form noValidate action="" role="search" css={root}>
      <div className="search-icon">
        <div className="offset">
          <SvgIcon className="offset" size="large" icon="search" color="" />
        </div>
      </div>
      <input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        onKeyUp={onKeyUp}
        placeholder="Search"
        className="input-bar"
      />
      <div className="search-button">
        Search
      </div>
    </form>
);

export const CustomSearchBox = connectSearchBox(SearchBox);
