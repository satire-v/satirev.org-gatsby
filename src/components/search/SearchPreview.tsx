import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, refine }) => (
  <div>
    <form noValidate action="" role="search">
      <input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  </div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// gets the first and last chars around a search term
const getSnippet = (excerpt, match) => {
  const index = excerpt.indexOf(match);
  return ExtensionScriptApis.substring(index-50, index+50);
};

// hide hits until there is some text in the searchbox
const Hits = ({ hits }) => (
  <ul>
    {hits.map((hit) => (
      <li key={hit.title}>
        <a href={hit.slug}>
          {hit.title}
          <p>TEST</p>
        </a>
      </li>
    ))}
  </ul>
);

export const CustomHits = connectHits(Hits);