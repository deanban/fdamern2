import { CompositeLayer, ScatterplotLayer, ArcLayer } from "deck.gl";

export default class Composite extends CompositeLayer {
  renderLayers() {
    // console.log("composite", this.props.data);
    return [
      new ScatterplotLayer({
        id: "from",
        data: this.props.data,
        getPosition: this.props.getPickupLocation,
        getColor: d => this.props.pickupColor,
        radiusScale: 300
      }),
      new ScatterplotLayer({
        id: "to",
        data: this.props.data,
        getPosition: this.props.getDropoffLocation,
        getColor: d => this.props.dropoffColor,
        radiusScale: 300
      }),
      new ArcLayer({
        id: "arc",
        data: this.props.data,
        opacity: 0.3,
        getSourcePosition: this.props.getPickupLocation,
        getTargetPosition: this.props.getDropoffLocation,
        getSourceColor: d => this.props.pickupColor,
        getTargetColor: d => this.props.dropoffColor,
        getstrokeWidth: 2
      })
    ];
  }
}
