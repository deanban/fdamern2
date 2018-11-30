import React, { Component } from "react";
import DeckGL from "deck.gl";
import CompositeClusterLayer from "./CompositeClusterLayer";

export default class DeckGLOverlay extends Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    const layers = [
      new CompositeClusterLayer({
        id: "Overlay",
        data: this.props.data,
        pickupColor: [0, 128, 255],
        dropoffColor: [255, 0, 128],
        getPickupLocation: d => d.from.coordinates,
        getDropoffLocation: d => d.to.coordinates
      })
    ];

    return <DeckGL {...this.props.viewport} layers={layers} />;
  }
}
