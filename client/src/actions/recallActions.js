function fetchingRecalls() {
  return {
    type: "FETCHING"
  };
}

function fetchedRecalls(data) {
  return {
    type: "FETCHED_DATA",
    payload: data
  };
}

function fetchingGeocodes() {
  return {
    type: "FETCHING_GEOCODES"
  };
}

function fetchedGeocodes(data) {
  return {
    type: "FETCHED_GEOCODES",
    payload: data
  };
}

function findData(data) {
  return {
    type: "FIND_DATA",
    payload: data
  };
}

/* Not required at the moment

function getPlaces() {
  return {
    type: "GET_PLACES"
    // payload: data
  };
}
*/

export function fetchGeocodes() {
  return async function(dispatch) {
    dispatch(fetchingGeocodes());
    await fetch("http://localhost:3001/api/v1/geocodes", {
      method: "GET"
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(fetchedGeocodes(data));
      });
  };
}

export function fetchData() {
  return async function(dispatch) {
    dispatch(fetchingRecalls());

    await fetch("http://localhost:3001/api/v1/recalls", {
      method: "GET"
    })
      .then(resp => resp.json())
      .then(json => {
        // console.log("fetch", json);
        dispatch(fetchedRecalls(json));
        dispatch(findData(json));
        // dispatch(getPlaces());
        // dispatch(getGeocode());
      });
  };
}
