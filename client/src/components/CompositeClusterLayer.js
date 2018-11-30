import DeckGL, { CompositeLayer } from "deck.gl";
import Composite from "./Composite";

import { clusterPoints } from "../data-processor/cluster_data";

export default class CompositeClusterLayer extends CompositeLayer {
  updateState({ oldProps, props }) {
    super.updateState(...arguments);

    if (oldProps.data !== props.data) {
      // data changed, recalculate cluster
      const clusteredData = clusterPoints(props.data, {
        pickup_cluster: props.getPickupLocation,
        dropoff_cluster: props.getDropoffLocation
      });
      console.log(clusteredData);

      // save processed data to layer state
      this.setState({ clusteredData });
    }
  }

  renderLayers() {
    return [
      new Composite({
        ...this.props,
        data: this.state.clusteredData,
        getPickupLocation: d => d.pickup_cluster,
        getDropoffLocation: d => d.dropoff_cluster
      })
    ];
  }
}

CompositeClusterLayer.layerName = "CompositeClusterLayer";
