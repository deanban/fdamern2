import _ from "lodash";

function recallsReducer(
  state = {
    isFetching: false,
    fetching_geocodes: false,
    recalls: [],
    places: [],
    coords: []
  },
  action
) {
  switch (action.type) {
    case "FETCHING":
      return Object.assign({}, state, { isFetching: true });

    case "FETCHED_DATA":
      return Object.assign({}, state, {
        recalls: action.payload,
        isFetching: false
      });

    case "FETCHING_GEOCODES":
      return Object.assign({}, state, { fetching_geocodes: true });

    case "FETCHED_GEOCODES":
      return Object.assign({}, state, {
        coords: action.payload,
        fetching_geocodes: false
      });

    case "FIND_DATA":
      return {
        ...state,
        recalls: _.uniqBy(state.recalls.concat(action.payload), "_id")
      };

    /* Not required at the moment

    case "GET_PLACES":
      return {
        ...state,
        places: state.recalls.map(recall => {
          console.log(recall);
          return Object.assign({
            from: `${recall.address_1}, ${recall.city}, ${recall.state}`,
            to: recall.distribution_pattern.replace(
              /^Distributed to: |and | via retail stores/gi,
              ""
            )
          });
        })
      };
      */

    default:
      return state;
  }
}

export default recallsReducer;
