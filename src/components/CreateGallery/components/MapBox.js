import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidHJvbmdub3RzYXZlIiwiYSI6ImNrazB2bmN0MjBodzEydm90a3QyanB4eXgifQ.BboCV-l5GEHMS0MIukeOYQ",
});

function MapBox({ width, height }) {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: height,
          width: width,
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  );
}
export default MapBox;
