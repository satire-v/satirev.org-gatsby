import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import SearchResult from "#components/search/SearchResult.react";

// hide hits until there is some text in the searchbox
const Hits = ({ hits }) => {
  console.log(hits);
  return (
  <ul>
    {hits.map((hit) => (
      <div>{hit}</div>
    ))}
  </ul>
  );
}

export const CustomHits = connectHits(Hits);