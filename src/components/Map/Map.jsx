import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-90.0, -32.0, 0],
        center: [-3, -12],
        scale: 1300,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77.1025, 28.7041]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"New Delhi"}
        </text>
      </Annotation>
      <Annotation
        subject={[74.124, 15.2993]}
        dx={90}
        dy={-45}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="45" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Goa"}
        </text>
      </Annotation>
      <Annotation
        subject={[77.5946, 12.9716]}
        dx={90}
        dy={-45}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="45" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Bangalore"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
