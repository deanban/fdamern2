import * as turf from "@turf/turf";
// import clustersKmeans from "@turf/clusters-kmeans";

export function clusterPoints(data, accessors) {
  const clusteredData = data.map(d => ({ ...d }));
  const allPoints = [];

  data.forEach((d, index) => {
    for (const key in accessors) {
      const p = turf.point(accessors[key](d), { index, key });
      allPoints.push(p);
      // debugger;
    }
  });
  // console.log(data);
  // console.log(allPoints);

  turf.clustersKmeans(turf.featureCollection(allPoints)).features.forEach(p => {
    const { index, key } = p.properties;
    const centroid = p.geometry.coordinates;
    // console.log(p.properties);
    clusteredData[index][key] = centroid;
    // debugger;
  });
  // console.log(clusteredData);
  // debugger;
  return clusteredData;
}
