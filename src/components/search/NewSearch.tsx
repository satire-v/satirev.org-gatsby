import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch, 
  SearchBox, 
  Hits, 
  Configure 
 } from 'react-instantsearch-dom';
import { CustomSearchBox, CustomHits } from './SearchPreview';

class NewSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: false,
      hasInput: false,
      refresh: false,
    };
  }

  render() {
    const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
    return (
      <div>
        NEW SEARCH BAR
        <InstantSearch
          searchClient={searchClient}
          indexName="Articles"
        >
          <Configure hitsPerPage={5} />
          <SearchBox
            className="searchbox"
            class="ais-SearchBox-input"
            submit={<></>}
            reset={<></>}
            translations={{
              placeholder: 'Search Postman Docs',
            }}
            onKeyUp={(event) => {
              this.setState({
                hasInput: event.currentTarget.value !== '',
              });
            }}
          />
          <div className={!this.state.hasInput ? 'input-empty' : 'input-value'}>
            <CustomHits hitComponent={Hits} />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default NewSearchBar;