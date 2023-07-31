import { fuseOptionsInterface } from "@/types"

export let fuseOptions:fuseOptionsInterface = {
    // isCaseSensitive: false,
  	// includeScore: true,
  	// shouldSort: true,
  	// includeMatches: false, this could be good
  	// findAllMatches: false,
  	// minMatchCharLength: 1, this could be good
  	// location: 0,
  	// threshold: 0.6, maybe boost this a little bit
  	// distance: 100,
  	// useExtendedSearch: false,
  	// ignoreLocation: false,
  	// ignoreFieldNorm: false, confusing
  	// fieldNormWeight: 1, confusing
    isCaseSensitive: false,
    keys: [
      "last_name",
      "first_name"
    ]
  }
