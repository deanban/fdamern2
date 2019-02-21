import React, { Component } from "react";
import MapGL, { NavigationControl } from "react-map-gl";
import { connect } from "react-redux";
import DeckGLOverlay from "./DeckGLOverlay";

const MAPBOX_STYLE = "mapbox://styles/deanb/cjk8l961f4bih2spdg98hlyat";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGVhbmIiLCJhIjoiY2prMXc2aGo1MGx3aDNxb2dpOXg2a3A5MyJ9.-1wms63S3D4V0WFAerBKQQ";

const navStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  height: "100%",
  // width: "100%",
  padding: "10px"
};

class MapContainer extends Component {
  constructor(props) {
    console.log("​MapContainer -> constructor -> props", props);
    super(props);
    this.state = {
      viewport: {
        width: props.width || window.innerWidth,
        height: props.height || window.innerHeight,
        longitude: -100,
        latitude: 37.785164,
        zoom: 3,
        pitch: 60,
        maxZoom: 16
      },
      currentTime: 0,
      data: null
    };
    this._resize = this._resize.bind(this);
    this._animate = this._animate.bind(this);
    this._onViewportChange = this._onViewportChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
    this._animate();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
    window.cancelAnimationFrame(this._animation);
  }

  async getDummyData() {
    await fetch(
      "https://raw.githubusercontent.com/deanban/fdamern/master/geo.json"
    )
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
    //   .then(props => this._renderTooltip());
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _animate() {
    this.setState({ currentTime: Date.now() });
    this._animation = window.requestAnimationFrame(this._animate);
  }

  render() {
    this.getDummyData();
    // console.log("map", );
    const { viewport } = this.state;

    return (
      <div>
        <MapGL
          {...viewport}
          mapStyle={MAPBOX_STYLE}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._onViewportChange} />
            <DeckGLOverlay viewport={viewport} data={this.state.data} />
            {/* <Arclayer viewport={viewport} /> */}
            {/* <Iconlayer viewport={viewport} /> */}
          </div>
        </MapGL>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("appmapstate", state);
  return {
    // recalls: state.data.recalls,
    geocodes: state.data.coords
  };
}

export default connect(
  mapStateToProps,
  null
)(MapContainer);
