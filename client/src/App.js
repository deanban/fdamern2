import React, { Component } from "react";
// import "./App.css";
import MapContainer from "./components/MapContainer";
// import Search from "./components/Search";
import { fetchData, fetchGeocodes } from "./actions/recallActions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    this.props.fetchGeocodes();
  }

  render() {
    // console.log("appstate ", this.props);
    return (
      <div className="App">
        <MapContainer />
        {/* <Search /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("appmapstate", state);
  return {
    recalls: state.data.recalls,
    geocodes: state.data.coords
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
    fetchGeocodes: () => {
      dispatch(fetchGeocodes());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
