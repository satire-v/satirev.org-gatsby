import { connectPagination } from "react-instantsearch-dom";
import React from "react";
import { css } from "@emotion/core";

const root = css`
  color: var(--font-color-primary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--crimson);
  border-radius: 6px;
  width: 100%;
  height: 60px;
  overflow: hidden;
  & {
    .page-button {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: var(--crimson-light);
      transition: all 0.2s ease;
      border-radius: 0;
      border: 0.1px solid var(--crimson);
    }
    .page-button:hover {
      cursor: pointer;
      background-color: var(--crimson-dark);
    }
    p {
      font-size: 24px;
    }
    .selected {
      background-color: var(--crimson);
      & {
        p {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
`;

const MAX_SHOWN = 6;

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
  if (nbPages <= MAX_SHOWN) {
    return (
      <div css={root}>
        <div
          className={
            currentRefinement === 1 ? "page-button selected" : "page-button"
          }
          onClick={event => {
            event.preventDefault();
            refine(1);
          }}
        >
          <p className={currentRefinement === 1 ? "selected" : ""}>1</p>
        </div>
        {new Array(nbPages - 1).fill(null).map((_, index) => {
          const page = index + 2;

          return (
            <div
              key={index}
              className={
                currentRefinement === page
                  ? "page-button selected"
                  : "page-button"
              }
              onClick={event => {
                event.preventDefault();
                refine(page);
              }}
            >
              <p>{page}</p>
            </div>
          );
        })}
      </div>
    );
  }

  const begin = Math.min(
    nbPages - MAX_SHOWN,
    Math.max(2, currentRefinement - Math.floor(MAX_SHOWN / 2) + 1)
  );
  return (
    <div css={root}>
      <div
        className={
          currentRefinement === 1 ? "page-button selected" : "page-button"
        }
        onClick={event => {
          event.preventDefault();
          refine(1);
        }}
      >
        <p className={currentRefinement === 1 ? "selected" : ""}>1</p>
      </div>
      {new Array(MAX_SHOWN).fill(null).map((_, index) => {
        const page = index + begin;

        return (
          <div
            key={index}
            className={
              currentRefinement === page
                ? "page-button selected"
                : "page-button"
            }
            onClick={event => {
              event.preventDefault();
              refine(page);
            }}
          >
            <p>{page}</p>
          </div>
        );
      })}
    </div>
  );
};

const CustomPagination = connectPagination(Pagination);
export { CustomPagination };
